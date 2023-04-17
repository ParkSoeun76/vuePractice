<template>
<button :class="buttonColor">
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
    height: 30px;
    border: none;
    color: white;
    padding: 7px 9px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
}

</style>