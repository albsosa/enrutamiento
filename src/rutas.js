import InicioComponent from './components/inicio.vue'
import UsuariosComponent from './components/usuarios.vue'
import InfoUsuario from './components/InfoUsuario.vue'


export const rutas = [
    {path:'', component: InicioComponent},
    {path:'/usuarios', component: UsuariosComponent, name: 'usuarios'},
    {path:'/usuarios/:id', component: InfoUsuario, name: 'infoUsuario'},
    {path:'*', redirect: '/'}

]