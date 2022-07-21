import { Genero } from './Genero';
import { Plataforma } from './Plataforma';
export interface Juego{
id:                     number;
title:                  string;
thumbnail:              string;
short_description:      string;
game_url:               string;
genre:                  Genero;
platform:               Plataforma;
publisher:              string;
developer:              string;
release_date:           string;
freetogame_profile_url: string;
}
