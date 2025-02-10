import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  categories = [
    { name: 'accions', images: [], sounds: [] },
    { name: 'emocions', images: [], sounds: [] },
    { name: 'necessitats', images: [], sounds: [] },
    { name: 'objectes', images: [], sounds: [] },
    { name: 'preferencies', images: [], sounds: [] },
    { name: 'respostes', images: [], sounds: [] },
    { name: 'salutacions', images: [], sounds: [] },
    { name: 'socialitzacio', images: [], sounds: [] },
  ];

  selectedImages: string[] = [];

  constructor() {
    this.categories.forEach((category) => {
      this.loadCategoryFiles(category);
    });
  }

  private loadCategoryFiles(category: any) {
    const imageFiles = this.getImageFiles(category.name);
    const soundFiles = this.getSoundFiles(category.name);

    imageFiles.forEach((imageFile) => {
      const imageFileName = imageFile.replace('.png', '.m4a').toLowerCase();
      const soundFile = soundFiles.find(
        (sound) => sound.toLowerCase() === imageFileName
      );

      if (soundFile) {
        category.images.push(`assets/images/${category.name}/${imageFile}`);
        category.sounds.push(`assets/sounds/${category.name}/${soundFile}`);
      }
    });
  }

  getSoundForImage(image: string): string | undefined {
    /* for (const category of this.categories) {
      const index = category.images.indexOf(image);
      if (index !== -1) {
        return category.sounds[index];
      }
    } */
    return undefined;
  }

  private getImageFiles(category: string): string[] {
    const imageFiles: { [key: string]: string[] } = {
      accions: [
        'ANAR.png',
        'BEURE.png',
        'DORMIR.png',
        'ESCOLTAR.png',
        'FER.png',
        'JUGAR.png',
        'MENJAR.png',
        'MIRAR.png',
        'OBRIR.png',
        'SORTIR.png',
        'TANCAR.png',
        'VULL.png',
      ],
      emocions: [
        'AVORRIDA.png',
        'BE.png',
        'CONTENTA.png',
        'ENFADADA.png',
        'FASTIC49.png',
        'MALAMENT.png',
        'NERVIOSA.png',
        'POR.png',
        'TRISTA.png',
      ],
      necessitats: [
        'AJUDA.png',
        'CACA.png',
        'CALOR.png',
        'CANSADA.png',
        'DUTXAR.png',
        'FRED.png',
        'GANA.png',
        'MAL.png',
        'PIPI.png',
        'RENTARMANS.png',
        'SET.png',
      ],
      objectes: [
        'aigua.png',
        'cadira.png',
        'joguina.png',
        'llibre.png',
        'menjar.png',
        'motxilla.png',
        'pilota.png',
        'polsador.png',
        'taula.png',
      ],
      preferencies: [
        'amics.png',
        'bicicleta.png',
        'conte.png',
        'dibuixos.png',
        'familia.png',
        'mobil.png',
        'musica.png',
        'pati.png',
        'televisio.png',
      ],
      respostes: [
        'jo.png',
        'menys.png',
        'mes.png',
        'no.png',
        'saber.png',
        'si.png',
        'tu.png',
      ],
      salutacions: [
        'adeu.png',
        'bonanit.png',
        'bondia.png',
        'hola.png',
        'quetal.png',
      ],
      socialitzacio: [
        'aqui.png',
        'gracies.png',
        'juguem.png',
        'magrada.png',
        'perdo.png',
        'quefas.png',
        'siusplau.png',
        'vine.png',
      ],
    };

    return imageFiles[category] || [];
  }
  /*
  emocions: ['AVORRIDA.PNG', 'BE.PNG', 'CONTENTA.PNG'],
necessitats: ['AJUDA.PNG', 'CACA.PNG', 'CALOR.PNG'],
objectes: ['AIGUA.PNG', 'CADIRA.PNG', 'JOGUINA.PNG'],
preferencies: ['AMICS.PNG', 'BICICLETA.PNG', 'CONTE.PNG'],
respostes: ['JO.PNG', 'MENYS.PNG', 'MES.PNG'],
salutacions: ['ADEU.PNG', 'BONANIT.PNG', 'BON DIA.PNG'],
socialitzacio: ['AQUI.PNG', 'GRACIES.PNG', 'JUGUEM.PNG'],
  */

  private getSoundFiles(category: string): string[] {
    const soundFiles: { [key: string]: string[] } = {
      accions: [
        'ANAR.m4a',
        'BEURE.m4a',
        'DORMIR.m4a',
        'ESCOLTAR.m4a',
        'FER.m4a',
        'JUGAR.m4a',
        'MENJAR.m4a',
        'MIRAR.m4a',
        'OBRIR.m4a',
        'SORTIR.m4a',
        'TANCAR.m4a',
        'VULL.m4a',
      ],
      emocions: [
        'AVORRIDA.m4a',
        'BE.m4a',
        'CONTENTA.m4a',
        'ENFADADA.m4a',
        'FASTIC49.m4a',
        'MALAMENT.m4a',
        'NERVIOSA.m4a',
        'POR.m4a',
        'TRISTA.m4a',
      ],
      necessitats: [
        'AJUDA.m4a',
        'CACA.m4a',
        'CALOR.m4a',
        'CANSADA.m4a',
        'DUTXAR.m4a',
        'FRED.m4a',
        'GANA.m4a',
        'MAL.m4a',
        'PIPI.m4a',
        'RENTARMANS.m4a',
        'SET.m4a',
      ],
      objectes: [
        'aigua.m4a',
        'cadira.m4a',
        'joguina.m4a',
        'llibre.m4a',
        'menjar.m4a',
        'motxilla.m4a',
        'pilota.m4a',
        'polsador.m4a',
        'taula.m4a',
      ],
      preferencies: [
        'amics.m4a',
        'bicicleta.m4a',
        'conte.m4a',
        'dibuixos.m4a',
        'familia.m4a',
        'mobil.m4a',
        'musica.m4a',
        'pati.m4a',
        'televisio.m4a',
      ],
      respostes: [
        'jo.m4a',
        'menys.m4a',
        'mes.m4a',
        'no.m4a',
        'saber.m4a',
        'si.m4a',
        'tu.m4a',
      ],
      salutacions: [
        'adeu.m4a',
        'bonanit.m4a',
        'bondia.m4a',
        'hola.m4a',
        'quetal.m4a',
      ],
      socialitzacio: [
        'aqui.m4a',
        'gracies.m4a',
        'juguem.m4a',
        'magrada.m4a',
        'perdo.m4a',
        'quefas.m4a',
        'siusplau.m4a',
        'vine.m4a',
      ],
    };

    return soundFiles[category] || [];
  }

  toggleImage(image: string) {
    if (this.selectedImages.includes(image)) {
      this.selectedImages = this.selectedImages.filter((img) => img !== image);
    } else {
      this.selectedImages.push(image);
    }
  }

  playSound(sound: string) {
    const audio = new Audio(sound);
    audio.play();
  }
}
