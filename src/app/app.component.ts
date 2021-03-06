import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;
  title = 'mon-blog';

  PostOne = 'Mon premier post';
  PostTwo = 'Mon deuxième post';
  PostThree = 'Encore un post';

  posts = [
    {
      title: 'Mon premier post',
      content: "Heureux l'homme qui ne marche pas selon le conseil des méchants, qui ne s'arrête pas sur la voie des pécheurs, et qui ne s'assied pas en compagnie des moqueurs, mais qui trouve son plaisir dans la loi de l'Éternel, et qui la médite jour et nuit ! Il est comme un arbre planté près d'un courant d'eau, qui donne son fruit en sa saison, et dont le feuillage ne se flétrit point : tout ce qu'il fait lui réussit. Il n'en est pas ainsi des méchants : ils sont comme la paille que le vent dissipe. C'est pourquoi les méchants ne résistent pas au jour du jugement, ni les pécheurs dans l'assemblée des justes ; car l'Éternel connaît la voie des justes, et la voie des pécheurs mène à la ruine.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: "Pourquoi ce tumulte parmi les nations, ces vaines pensées parmi les peuples ? Pourquoi les rois de la terre se soulèvent-ils Et les princes se liguent-ils avec eux Contre l'Éternel et contre son oint ? Brisons leurs liens, délivrons-nous de leurs chaînes ! Celui qui siège dans les cieux rit, le Seigneur se moque d'eux. Puis il leur parle dans sa colère, il les épouvante dans sa fureur : c'est moi qui ai oint mon roi Sur Sion, ma montagne sainte ! Je publierai le décret ; l'Éternel m'a dit : tu es mon fils ! Je t'ai engendré aujourd'hui. Demande-moi et je te donnerai les nations pour héritage, les extrémités de la terre pour possession ; tu les briseras avec une verge de fer, tu les briseras comme le vase d'un potier. Et maintenant, rois, conduisez-vous avec sagesse ! Juges de la terre, recevez instruction ! Servez l'Éternel avec crainte, et réjouissez-vous avec tremblement. Baisez le fils, de peur qu'il ne s'irrite, et que vous ne périssiez dans votre voie, car sa colère est prompte à s'enflammer. Heureux tous ceux qui se confient en lui !",
      loveIts: -3,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: "O Éternel, que mes ennemis sont nombreux ! Quelle multitude se lève contre moi ! Combien qui disent à mon sujet : plus de salut pour lui auprès de Dieu ! Mais toi, ô Éternel ! tu es mon bouclier, tu es ma gloire, et tu relèves ma tête. De ma voix je crie à l'Éternel, et il me répond de sa montagne sainte. Je me couche, et je m'endors ; je me réveille, car l'Éternel est mon soutien. Je ne crains pas les myriades de peuples Qui m'assiègent de toutes parts. Lève-toi, Éternel ! sauve-moi, mon Dieu ! Car tu frappes à la joue tous mes ennemis, tu brises les dents des méchants. Le salut est auprès de l'Éternel : que ta bénédiction soit sur ton peuple !",
      loveIts: 4,
      created_at: new Date()
    }
  ];
  constructor() {
      setTimeout(
        () => {
          this.isAuth = true;
        }, 2000
      );
    }
}
