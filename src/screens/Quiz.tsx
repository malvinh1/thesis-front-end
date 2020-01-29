import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { IconButton, Text, Button } from 'exoflex';
import { useNavigation } from 'naviflex';

import { Loading } from '../components';
import { COLORS } from '../constants/colors';
import { FONT_SIZE } from '../constants/fonts';
import { GET_PROFILE_DATA } from '../graphql/queries/myProfileQuery';
import { GET_QUESTIONS } from '../graphql/queries/questionsQuery';
import { UPDATE_PROFILE } from '../graphql/mutations/updateProfileMutation';
import { UPDATE_USER_PROGRESS } from '../graphql/mutations/userProgressMutation';

import { questions, questionsVariables } from '../generated/questions';
import {
  UpdateUserProgress,
  UpdateUserProgressVariables,
} from '../generated/UpdateUserProgress';
import {
  UpdateProfile,
  UpdateProfileVariables,
} from '../generated/UpdateProfile';
import { myProfile } from '../generated/myProfile';

export default function Quiz() {
  const { getParam, navigate } = useNavigation();
  const category = getParam('category');
  let progress = getParam('progress');

  const [pressedCorrect, setPressedCorrect] = useState(false);
  const [level, setLevel] = useState(getParam('level'));

  const { loading, data } = useQuery<questions, questionsVariables>(
    GET_QUESTIONS,
    {
      variables: {
        category,
      },
    },
  );

  let { data: profileData } = useQuery<myProfile>(GET_PROFILE_DATA);

  const [updateProgress] = useMutation<
    UpdateUserProgress,
    UpdateUserProgressVariables
  >(UPDATE_USER_PROGRESS);

  const [updateProfile] = useMutation<UpdateProfile, UpdateProfileVariables>(
    UPDATE_PROFILE,
  );

  const checkAnswer = (correct: boolean) => {
    if (!correct && !pressedCorrect) {
      Alert.alert('Wrong Answer', 'Please try again', [{ text: 'OK' }], {
        cancelable: false,
      });
    } else if (correct && !pressedCorrect) {
      if (progress === level - 1) {
        progress += 1;
        updateProgress({
          variables: {
            CPR:
              category === 'CPR'
                ? progress
                : profileData?.myProfile.progress.CPR,
            Bruised:
              category === 'Bruised'
                ? progress
                : profileData?.myProfile.progress.Bruised,
            Burns:
              category === 'Burns'
                ? progress
                : profileData?.myProfile.progress.Burns,
            Cramps:
              category === 'Cramps'
                ? progress
                : profileData?.myProfile.progress.Cramps,
            NoseBleed:
              category === 'NoseBleed'
                ? progress
                : profileData?.myProfile.progress.NoseBleed,
            OpenWound:
              category === 'OpenWound'
                ? progress
                : profileData?.myProfile.progress.OpenWound,
          },
        });
        updateProfile({
          variables: {
            highestScore: profileData?.myProfile.highestScore
              ? profileData.myProfile.highestScore + 1
              : 1,
            point: profileData?.myProfile.point
              ? profileData.myProfile.point + 10
              : 10,
          },
        });

        Alert.alert('Correct!', 'Score: +1, Coins: +10', [{ text: 'OK' }], {
          cancelable: false,
        });
      } else {
        Alert.alert('Correct!', 'You are good', [{ text: 'OK' }], {
          cancelable: false,
        });
      }
      setPressedCorrect(true);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <IconButton
          icon="arrow-left"
          color={COLORS.primaryColor}
          onPress={() => navigate('SelectLevel', { category })}
        />
        <View />
      </View>
      <View style={styles.levelContainer}>
        <Text style={styles.level}>Level {level}</Text>
      </View>
      <View style={styles.border} />
      <View style={styles.marginHorizontal}>
        <Text style={styles.question}>
          {data?.questions[level - 1].description}
        </Text>
        {data?.questions[level - 1].choices?.map((element, index) => {
          return (
            <Button
              style={[
                styles.choiceButton,
                pressedCorrect && element.correct
                  ? styles.backgroundColorGreen
                  : styles.backgroundColorWhite,
              ]}
              key={index}
              onPress={() => {
                checkAnswer(element.correct);
              }}
            >
              <Text
                style={[
                  styles.abcd,
                  pressedCorrect && element.correct ? styles.colorWhite : null,
                ]}
              >
                {String.fromCharCode(index + 65)}.
              </Text>
              <Text
                style={[
                  styles.answer,
                  pressedCorrect && element.correct ? styles.colorWhite : null,
                ]}
              >
                {element.answer}
              </Text>
            </Button>
          );
        })}

        {pressedCorrect ? (
          <View style={styles.nextLevelContainer}>
            <Button
              onPress={() => {
                setLevel(level + 1);
                setPressedCorrect(false);
              }}
            >
              Next Level
            </Button>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  abcd: {
    fontSize: FONT_SIZE.large,
    marginLeft: 16,
    marginRight: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  answer: {
    color: COLORS.black,
    fontSize: FONT_SIZE.large,
    paddingRight: 16,
  },
  backgroundColorGreen: {
    backgroundColor: COLORS.primaryColor,
  },
  backgroundColorWhite: {
    backgroundColor: COLORS.white,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
    marginBottom: 16,
    marginHorizontal: 24,
  },
  colorWhite: {
    color: COLORS.white,
  },
  choiceButton: {
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: COLORS.grey,
    flexDirection: 'row',
    marginVertical: 16,
  },
  container: {
    flex: 1,
  },
  level: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.darkGrey,
  },
  levelContainer: {
    marginLeft: 24,
    marginBottom: 16,
  },
  marginHorizontal: {
    marginHorizontal: 24,
  },
  navbar: {
    height: 80,
    marginTop: 35,
    paddingLeft: 8,
  },
  nextLevelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  question: {
    fontSize: FONT_SIZE.large,
  },
});
