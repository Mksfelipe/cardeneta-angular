import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User | undefined
  titleCard: string | undefined;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      (userProfile) => {
        this.user = userProfile;
      },
      (error) => {
        console.error('Erro ao obter o perfil do usuário:', error);
      }
    );
  }

}
