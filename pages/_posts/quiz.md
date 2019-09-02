---
title: Quiz
date: 2019-02-22
layout: plain
---

<Quiz v-bind:quizObj="{questions: [ { 
      text: 'Who is the Batman',
      responses: [
           {
              text: 'Laughing Bat'
           },
           {
              text: 'Bruce Wayne',
              correct: true
           },
           {
              text: 'Dick Grayson'
           },
           {
              text: 'None of the above'
           }
        ]
    }, {
      text: 'this quiz is fun',
      responses: [
        {
          text: 'Bruce Wayne',
          correct: true
        },
      ]
    } ]}"/>

## About me

I'm a cool guy from the Mars, nice to meet you folks.

<script>
import Quiz from '../../components/Quiz.vue'

export default {
  components: {
    Quiz
  }
}
</script>