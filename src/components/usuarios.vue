<template>
    <div>
        <p>Lista de Usuarios</p>
        <ul class="list-group">
            <router-link
                tag="li" 
                :to="{name:'infoUsuario', params:{id: usuario.id}}"
                class="list-group-item" 
                v-for="usuario in usuarios">
                {{usuario.name}}
            </router-link> 
        </ul>
        <router-view></router-view>
    </div>

</template>
<script>
export default{
    data(){
        return{
            usuarios : {}
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(usuarios => {
            this.usuarios = usuarios
        })
   }
}

</script>