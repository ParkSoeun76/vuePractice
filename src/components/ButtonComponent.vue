<template>
<button :class="buttonColor + ' button'" >

 {{buttonText}}
</button>
</template>

<script>

export default {
    name: "ButtonComponent",
    props: {
        buttonText: {
            type: String,
            default: ""
        },
        buttonColor: {
            type: String,
            default: ""
        }
        
    },
    mounted() {
      console.log('mounted')
    }
}
</script>

<style>
.RedButton{
    background-color: #D5342C;
}
.GreenButton{
    background-color: #A6D651;
}
.OrangeButton{
    background-color: #FA8F2A;
}
.button{
    font-family: "Nunito", sans-serif;
    width: 60px;
    border: none;
    color: white;
    padding: 3px 3px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
}

</style>