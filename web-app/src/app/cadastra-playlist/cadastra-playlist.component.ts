import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist-admin/playlist.service';
import { Playlist } from '../playlist-admin/playlist';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../criar-categoria/categoria';

@Component({
  selector: 'app-cadastra-playlist',
  templateUrl: './cadastra-playlist.component.html',
  styleUrls: ['./cadastra-playlist.component.css']
})

export class CadastraPlaylistComponent implements OnInit {
  constructor(private playlistService: PlaylistService, private router: Router, private http: HttpClient) {}
  playlist: Playlist = new Playlist();
  categorias: Categoria[] = [];
  categoriasSelecionadas: Categoria[] = [];

  cadastraPlaylist() {
    console.log(this.playlist)
    this.playlistService.createPlaylist(this.playlist)
    .subscribe({
      next: (result: Playlist | null) => {
        if (result) {
          this.playlist = new Playlist();
        }
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
        console.log("Fluxo de dados concluído.");
      }
    });
  }

  ngOnInit(){
    this.http.get<any[]>('http://localhost:3000/categorias').subscribe(
      (categorias) => {
        this.categorias = categorias;
      },
      (error) => {
        console.error('Erro ao carregar categorias:', error);
      }
    );
  }

  cancelarCadastrarPlaylist() {
    window.history.back()
  }
}
