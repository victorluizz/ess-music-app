import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { ListaMusicasComponent } from './lista-musicas/lista-musicas.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { MusicasComponent } from './musicas/musicas.component';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UserComponent } from './user/user.component';
import { ArtistaComponent } from './artista/artista.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PlaylistUserComponent } from './playlist-user/playlist-user.component';
import { PlaylistCategoriaComponent } from './playlist-categoria/playlist-categoria.component';
import { PlaylistSeguidaComponent } from './playlist-seguida/playlist-seguida.component';
import { ArtistaAdminComponent } from './artista-admin/artista-admin.component';
import { AlbumComponent } from './album/album.component';
import { AlbumAdminComponent } from './album-admin/album-admin.component';
import { CadastraArtistaComponent } from './cadastra-artista/cadastra-artista.component';
import { CadastraAlbumComponent } from './cadastra-album/cadastra-album.component';
import { VisualizacaoAdminArtistasComponent } from './visualizacao-admin-artistas/visualizacao-admin-artistas.component';
import { PlaylistAdminComponent } from './playlist-admin/playlist-admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'lista-usuarios', component: UserlistingComponent, canActivate: [AuthGuard] },
  { path: 'lista-musicas', component: ListaMusicasComponent, canActivate: [AuthGuard] },
  { path: 'initial-page', component: InitialPageComponent, canActivate: [AuthGuard] },
  { path: 'userAdmin', component: UserAdminComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'artista', component: ArtistaComponent, canActivate: [AuthGuard] },
  { path: 'userEdit', component: UserEditComponent, canActivate: [AuthGuard] },
  { path: 'playlistUser', component: PlaylistUserComponent },
  { path: 'playlistCategoria', component: PlaylistCategoriaComponent },
  { path: 'playlistSeguida', component: PlaylistSeguidaComponent },
  { path: 'visualizar-artistas-admin/:id/:nome/:genero_musical/:url_foto_artista/artistaAdmin', component: ArtistaAdminComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'albumAdmin/:id', component: AlbumAdminComponent },
  { path: 'visualizar-artistas-admin/:id/:nome/:genero_musical/:url_foto_artista/artistaAdmin/:artistaId/:albumId/cadastrar-musica', component: MusicasComponent },
  { path: 'cadastrar-artista', component: CadastraArtistaComponent },
  { path: 'visualizar-artistas-admin/:id/cadastrar-album', component: CadastraAlbumComponent },
  { path: 'visualizar-artistas-admin', component: VisualizacaoAdminArtistasComponent },
  { path: 'playlistAdmin', component: PlaylistAdminComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
