<template>
  <body  id="background">

    <h1 class="center">TODO APP</h1>
  <div class="dashboard">
    <div class="containerForInput">
      <div class="containerInput">


        <input v-model="taskToDo" placeholder="write a task">
        <div>
        {{taskToDoSize}}
        </div>
        <button @click="saveTask()"> + Add</button>
      </div>
    </div>
    <ul>
      <li v-for="(item, index, key) in tasks" :key="key" class="item in tasks">
        <div class="containerSquare">
          <div class="containerToDoList">
            <p>{{ item }}</p>
            <buttonComponent buttonText="Delete" buttonColor="RedButton" @click.native="deleteTask(index)"></buttonComponent>

            <button class="buttonArchive" @click="archiveTask(item,index)"> Archive</button>
          </div>
        </div>
      </li>
    </ul>

<buttonComponent buttonText="Undo Archive" buttonColor="GreenButton"></buttonComponent>
<buttonComponent buttonText="Undo Archive" buttonColor="OrangeButton"></buttonComponent>
    <!-- Completed  -->
    <h2>Completed!</h2>
    <ul>
      <li v-for="(item, index, key) in taskArchieved" :key="key">
        <div class="containerForInput">
          <div class="containerCompleted">

            <p>
              {{ item }}
            </p>


            <button class="buttonUndoArchive" @click="undoArchive(item,index)">
              Undo Archive
            </button>
          </div>
        </div>

      </li>
    </ul>
  </div>
</body>
</template>


<script>
import ButtonComponent from './components/ButtonComponent.vue';
const firebase = require('./firestoreSetUp.js');
import { doc, setDoc } from "firebase/firestore";


export default {
  el: '#app',
  components: {ButtonComponent},
  data: () => {
    return {
      taskToDo: '',
      tasks: [
        'Buy milk',
        'Eat fruit'
      ],
      taskArchieved: [],
      //taskToDoSize: 0
    };
  },

  /*
  watch: {
    taskToDo(newValue) {
     //console.log(newValue)
     this.taskToDoSize = newValue.length
    }
  },
  */

  methods: {


    async saveTask() {
      if (
          this.taskToDo !== ''
      ) {

        const cityRef = doc(firebase.db, 'pets', 'BJ');
        await setDoc(cityRef, { capital: true }, { merge: true });

        this.tasks.push(this.taskToDo)
        this.taskToDo = ''
      }
    },
    deleteTask(indexToDelete) {
      this.tasks.splice(indexToDelete, 1);
    },

    archiveTask(itemToArchive, indexToDelete) {
      this.tasks.splice(indexToDelete, 1);
      this.taskArchieved.push(itemToArchive);
    },

    undoArchive(taskToDo) {
      this.tasks.push(taskToDo);
      this.taskArchieved.splice(taskToDo, 1);
    }
  }
}
</script>

<style>
body {
  text-align: center;
/*  background-color: #ffffff;*/

}

#background {
  background-image: linear-gradient(200deg, #8C4CF8, #F8BE4C);
  height: 100vh;
}

section {
  display: block;
}

div {
  width: 100%;
  max-width: 600px;
  margin: 18px auto;
  overflow: auto;
  background-color: white;
  box-shadow: 0px 5px 15px rgba(black, .25);
  border-radius: 20px;
}


h1 {
  margin-top: 50px;
  font-family: 'Nunito', sans-serif;
  font-size: 40px;
}

h2 {
  font-family: "Nunito", sans-serif;
  font-size: 25px;
}

p {
  font-family: "Nunito", sans-serif;
  align-items: baseline;
  margin-bottom: 0px;
  font-size: 20px;
  width: 50%;
}

input::placeholder {
  font-family: "Nunito", sans-serif;
  font-size: 19px;
  margin: 0 auto;
  text-align: left;
  width: 150px 27px;

}

input {
  font-family: "Nunito", sans-serif;
  font-size: 19px;
  margin: 0 auto;
  text-align: left;
  border: 1px solid #000000;
  width: 150px 20px;
  padding: 2px 40px;
  border-radius: 2px;
}


button {
  font-family: "Nunito", sans-serif;
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 8px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  border-radius: 4px;
}

.dashboard {
  position: relative;
  width: 80%;
  max-width: 50rem;
  margin: 0 auto 3rem;
  overflow: hidden;
  transition: 0.5s ease-in-out 0s;
  background-color: white;

}

.buttonDelete {
  font-family: "Nunito", sans-serif;
  width: 60px;
  height: 30px;
  background-color: #D5342C;
  border: none;
  color: white;
  padding: 5px 7px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  border-radius: 4px;
}

.buttonArchive {
  font-family: "Nunito", sans-serif;
  width: 60px;
  height: 30px;
  background-color: #A6D651;
  border: none;
  color: white;
  padding: 7px 9px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  border-radius: 4px;
}

.buttonUndoArchive {
  font-family: "Nunito", sans-serif;
  width: 60px;
  height: 30px;
  background-color: #FA8F2A;
  border: none;
  color: white;
  padding: 7px 9px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  border-radius: 4px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.containerForInput {
  display: flex;
  width: 400px;
  justify-content: center;
}

.containerSquare {
  display: flex;
  justify-content: center;
}

.containerInput {
  display: flex;
  width: 380px;
  justify-content: flex-start;
  margin: 5px;

}

.containerToDoList {
  display: flex;
  justify-content: flex-start;
  margin: 3px;
  width: 400px;
  height: 48px;
  gap: 8px 30px;
  row-gap: 5px;
  align-items: center;
  background-color: #EEEEEE;

  border-radius: 0px;
}

.containerCompleted {
  display: flex;
  justify-content: flex-start;
  margin: 5px;
  width: 400px;
  height: 50px;
  gap: 10px 120px;
  row-gap: 5px;
  column-gap: 120px;
  align-items: center;
  background-color: #EEEEEE;
  border-radius: 0px;
}
</style>
