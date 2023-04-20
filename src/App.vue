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
        <button @click="saveTask()"> + </button>
      </div>
    </div>
    <ul>
      <li v-for="(item, index, key) in tasks" :key="key" class="item in tasks">
        <div class="containerSquare">
          <div class="containerToDoList">
            <p>{{ item }}</p>
            <buttonComponent buttonText="Delete" buttonColor="RedButton" @click.native="deleteTask(index)" >
             <img src="assets/trash.png"/>
            </buttonComponent>
           
            <buttonComponent buttonText="Complete" buttonColor="GreenButton" @click.native="archiveTask(item,index)">
              <img src="complete.png" />
            </buttonComponent>
          
          </div>
        </div>
      </li>
    </ul>

    <!-- Completed  -->
    <h2>Completed!</h2>
    <ul>
      <li v-for="(item, index, key) in taskArchieved" :key="key">
        <div class="containerSquare">
          <div class="containerCompleted">

            <p>
              {{ item }}
            </p>

            <buttonComponent buttonText="Undo" buttonColor="OrangeButton" @click.native="undoArchive(item,index)">
            </buttonComponent>
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
import { collection, addDoc } from "firebase/firestore";

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
      //  const petsRef = doc(firebase.db, 'Tasks', "soeun");
       // await setDoc(petsRef, { description: this.taskToDo });
     
       await addDoc(collection(firebase.db, "Tasks"), {
        description: this.taskToDo
      });

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
  height: 100vh;
  background-image: linear-gradient(200deg, #8C4CF8, #F8BE4C);
  height: 100vh;

}
/*
#background {
  background-image: linear-gradient(200deg, #8C4CF8, #F8BE4C);
  height: 100vh;
}
*/
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
  text-align: center;
}


h1 {
  font-family: 'Nunito', sans-serif;
  font-size: 40px;
  margin-top: 30px;
  color:#EEEEEE;
  
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
  margin-right: 50px;
  text-align: left;
  width: 150px 27px;

}

input {
  width: 100%;
  border: 0;
  outline: none;
  color: #000000;
  margin-right: 50px;
  margin-right: 50px;
  font-weight: 300;
  font-family: "Nunito", sans-serif;
  font-size: 19px;
  margin: 0 auto;
  text-align: left;
  width: 150px 20px;
  padding: 2px 30px;
  border-radius: 2px;
}

.dashboard {
  position: relative;
  width: 80%;
  max-width: 800px;
  margin: 0 auto 50px;
  overflow: hidden;
  transition: 0.5s ease-in-out 0s;
  background-color: white; 
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}


button{
  font-family: "Nunito", sans-serif;
  background-color: #ae77c2;
  width: 30px;
  height: 30px;
  border: none;
  color: white;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  margin-left: 5px;
 /* padding: 7px 9px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
  border-radius: 50%;
}

img {
  width: 20px;
  height: 20px;
}

.taskNew {
  width:300px;
  height:50px;
  background-color: #ffffff;
  align-items: left;
  justify-content: center;
  padding: 0.8rem 1rem 0.8rem 1rem;
  overflow: hidden;
  transition: all 0.5s ease-in-out 0s;
  border: 0.3rem solid color-brand-3;
  border-radius: 5rem;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.containerForInput {
  display: flex;
  width: 450px;
  justify-content: center;
}

.containerSquare {
  width: 500px;
  display: flex;
  justify-content: center;
}

.containerInput {
  display: flex;
  width: 500px;
  justify-content: flex-start;
  border: 3px solid #b795c8;
  margin: 5px;
  border-radius: 50px;

}

.containerToDoList {
  display: flex;
  justify-content: flex-start;
  margin: 1px;
  width: 440px;
  height: 45px;
  gap: 1px 30px;
  row-gap: 1px;
  align-items: center;
  background-color: #f5eef7;
  border: 1px solid #b795c8;
  border-radius: 0px;
}

.containerCompleted {
  display: flex;
  justify-content: flex-start;
  margin: 1px;
  width: 440px;
  height: 45px;
  gap: 1px 30px;
  row-gap: 1px;
  align-items: center;
  background-color: #f5eef7;
  border: 1px solid #b795c8;
  border-radius: 0px;
}

img {

}
</style>
