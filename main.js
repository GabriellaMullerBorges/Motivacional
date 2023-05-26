

const numerosSorteados = [];
const itensSorteados = [
  "A persistência é o caminho do êxito.",
  "Não ignore o seu potencial, você pode mais do que imagina.",
  "A beleza da flor ao lado não anula a sua.",
  "Sonhe, acredite, dedique-se e realize!",
  "Você só vence amanhã se não desistir hoje!",
  "Lembrete diário: tire um tempinho para cuidar de você!",
  "Valorize até as pequenas vitórias.",
  "Trabalhe duro e em silêncio. Deixe que o sucesso faça barulho.",
  "Se recarregue sempre de boas energias.",
  "O segredo para progredir é começar.",
  "Seja a sua admiradora número 1.",
  "Acorde todos os dias com um motivo para o seu dia ser incrível.",
  "Não deixe os seus sonhos serem apenas sonhos.",
  "Apaixone-se pelo processo de se tornar a sua melhor versão.",
  "Se você cansar, aprenda a descansar e não a desistir.",
  "Seja quem você deseja ter por perto.",
  "Não importa a cor do céu, quem faz o dia bonito é você.",
  "Direção é mais importante do que velocidade.",
  "E se eu cair? Mas e se você voar?",
  "O segredo é sempre sorrir para a vida, ter fé que um dia tudo vai dar certo.",
  "Seja a mulher da sua vida.",
  "Apesar de tudo, a vida é muito boa. Quando você menos espera, ela vem e muda tudo.",
  "A perfeição está no equilíbrio de todas as coisas.",
  "Antes de tudo, fé. Depois de tudo, gratidão.",
  "Você é única, você é capaz, você consegue!",
  "Quanto mais você se supera, mais a motivação aparece.",
  "Para realizar grandes coisas, comece pelas pequenas.",
  "Comece onde você está, use o que você tem, faça o que você pode.",
  "A gentileza é o jeito mais bonito de ser sol no dia nublado de alguém.",
  "Não meça seu progresso com a régua de outra pessoa.",
  "Cada nova fase da sua vida vai demandar que você seja uma nova pessoa.",
  "Em tempos tão áridos de afeto, qualquer borrifadinha de amor refresca a alma.",
  "Tudo vai dar certo! E se não der, a gente tenta de novo.",
  "Não pare até se orgulhar de você.",
  "Nem sempre você estará motivada, então aprenda a ser disciplinada.",
  "Se for pra melhor, mude.",
  "Acorde, planeje, realize. Repita.",
  "Apenas seja! Você pode ser tudo o que você quiser.",
  "Você fica tão bonita quando está vestida de si.",
  "Foi de tanto perder o chão que fortaleci as minhas asas.",
  "Seu único limite é você mesma.",
  "Se não hoje e agora, quando vai ser?",
  "Comece hoje, com o que você tem hoje e veja como o amanhã irá te surpreender.",
  "Faça bem feito, mas também faça o bem. O resto vem.",
  "Não se apegue ao que te apaga.",
  "Se não puder voar, corra. Se não puder correr, ande. Se não puder andar, rasteje. Mas continue sempre em frente.",
  "Seja mais forte do que a sua melhor desculpa.",
  "Não desista após falhar nas primeiras tentativas. A persistência é amiga das conquistas.",
  "Reclame menos, agradeça mais.",
  "Eu posso aceitar a falha. Mas eu não posso aceitar não tentar."  
];


for (let i = 1; i <= 50; i++) {
  numerosSorteados.push(i);
}


for (let i = 0; i < numerosSorteados.length; i++) {
  const numero = numerosSorteados[i];
  const item = `Item ${numero}`; 
  
  itensSorteados.push(item);
}


function sortearItem() {
  const indiceSorteado = Math.floor(Math.random() * numerosSorteados.length);
  const itemSorteado = itensSorteados[indiceSorteado];
  
  console.log("Item sorteado:", itemSorteado);
}

document.getElementById("button_motivacional").addEventListener("click", sortearItem);
document.getElementById("button_autoajuda").addEventListener("click", sortearItem);
document.getElementById("button_biblia").addEventListener("click", sortearItem);
document.getElementById("button_humor").addEventListener("click", sortearItem);
