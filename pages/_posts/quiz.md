---
title: Quiz
date: 2019-02-22
layout: plain
excerpt: Quiz
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

<script>
import Quiz from '../../components/Quiz.vue'

export default {
  components: {
    Quiz
  }
}
</script>