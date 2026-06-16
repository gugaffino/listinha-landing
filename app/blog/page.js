import NavDropdown from '../../components/NavDropdown'
import { BrandIcon } from '../../components/Icon'

export const metadata = {
  title: 'Blog — Mise',
  description: 'Dicas de organização de cozinha, listas de compras e planejamento semanal.',
  alternates: {
    canonical: 'https://www.miseemcasa.com.br/blog',
  },
}

const posts = [
  {
    slug: 'lista-basica-de-compras',
    tag: 'Lista de compras',
    title: 'Lista básica de compras: guia com 80+ itens pra copiar',
    description: 'Os 7 grupos essenciais, quanto custa por mês por perfil de família e dicas pra economizar no supermercado.',
    img: 'https://images.pexels.com/photos/11018212/pexels-photo-11018212.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Carrinho de compras em supermercado',
    date: '2025-03-10',
    dateLabel: 'Mar 2025',
  },
  {
    slug: 'lista-de-compras-para-casa-nova',
    tag: 'Casa nova',
    title: 'Lista de compras para casa nova: o que não pode faltar',
    description: '60+ itens organizados por cômodo, o que comprar no primeiro dia e estimativa de custo por perfil.',
    img: 'https://images.pexels.com/photos/8730049/pexels-photo-8730049.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Mulher carregando caixa ao entrar em apartamento novo',
    date: '2025-04-02',
    dateLabel: 'Abr 2025',
  },
  {
    slug: 'como-organizar-a-despensa',
    tag: 'Organização',
    title: 'Como organizar a despensa: guia prático em 7 passos',
    description: '7 passos pra esvaziar, agrupar, rotular e manter organizado — incluindo como organizar a geladeira por zonas.',
    img: 'https://images.pexels.com/photos/6660254/pexels-photo-6660254.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Despensa organizada com potes transparentes e prateleiras bem distribuídas',
    date: '2026-05-21',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'como-economizar-no-mercado',
    tag: 'Economia',
    title: 'Como economizar no mercado: 12 hábitos que realmente funcionam',
    description: 'Economizar no mercado começa antes de sair de casa. Lista, despensa e cardápio conectados cortam até 27% do gasto mensal.',
    img: 'https://images.pexels.com/photos/3985066/pexels-photo-3985066.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Família fazendo compras no supermercado com lista na mão',
    date: '2026-05-22',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'o-que-e-cranberry',
    tag: 'Ingredientes',
    title: 'O que é cranberry: para que serve e como usar no dia a dia',
    description: 'Cranberry é uma fruta vermelha com propriedades antioxidantes. Saiba o que é, para que serve, onde encontrar no Brasil e se vale a pena colocar na lista.',
    img: 'https://images.pexels.com/photos/29181506/pexels-photo-29181506.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Cranberries frescos em bandejas no mercado — fruta vermelha da América do Norte',
    date: '2026-05-25',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'o-que-e-pistache',
    tag: 'Ingredientes',
    title: 'O que é pistache: origem, tipos e se vale colocar na lista',
    description: 'Pistache é uma oleaginosa de casca dura com interior verde e sabor único. Saiba o que é, os tipos disponíveis no Brasil, onde comprar e se vale o preço.',
    img: 'https://images.pexels.com/photos/27644256/pexels-photo-27644256.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Pistaches frescos com casca entreaberta mostrando o interior verde',
    date: '2026-05-27',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'caderno-de-receitas',
    tag: 'Organização',
    title: 'Caderno de receitas: como organizar e não perder a que funciona',
    description: 'Caderno de receitas é onde você guarda as que realmente fazem parte da sua cozinha. Saiba o que incluir, como organizar por categorias e quando vale ir pro digital.',
    img: 'https://images.pexels.com/photos/8715616/pexels-photo-8715616.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Caderno de receitas aberto com escrita à mão sobre mesa de madeira com ingredientes ao redor',
    date: '2026-05-28',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'para-que-serve-oleo-de-linhaca',
    tag: 'Ingredientes',
    title: 'Óleo de linhaça: para que serve e como usar na cozinha',
    description: 'Óleo de linhaça serve para saúde cardiovascular, controle de inflamação e pele. Saiba como usar sem errar, a diferença da semente e como guardar do jeito certo.',
    img: 'https://images.pexels.com/photos/7420868/pexels-photo-7420868.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Frasco de óleo de linhaça ao lado de sementes de linhaça douradas sobre superfície de madeira',
    date: '2026-05-28',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'o-que-e-chia',
    tag: 'Ingredientes',
    title: 'Chia tem proteína? O que é, para que serve e como usar',
    description: 'Chia é uma semente com ômega-3, fibras e proteína. Veja o que é, para que serve, como fazer o gel e o pudim, e quando vale mais que a linhaça.',
    img: 'https://images.pexels.com/photos/27468397/pexels-photo-27468397.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Sementes de chia pretas em close-up sobre superfície branca — textura detalhada',
    date: '2026-05-29',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'o-que-e-curcuma',
    tag: 'Ingredientes',
    title: 'O que é cúrcuma: benefícios, como usar e onde comprar',
    description: 'Cúrcuma é o tempero amarelo do curry e do arroz. Saiba o que é, para que serve a curcumina, por que precisa de pimenta preta e como guardar na despensa.',
    img: 'https://images.pexels.com/photos/877220/pexels-photo-877220.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Pó de cúrcuma amarelo-alaranjado em colher de madeira sobre superfície escura',
    date: '2026-05-29',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'lista-de-compras-do-mes',
    tag: 'Lista de compras',
    title: 'Lista de compras do mês: quantidades e como gastar menos',
    description: 'Organize a compra mensal por categoria, estime as quantidades certas por tamanho de família e evite as idas extras ao mercado no meio da semana.',
    img: 'https://images.pexels.com/photos/4971951/pexels-photo-4971951.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Mulher empurrando carrinho de compras em corredor de supermercado com frutas e verduras',
    date: '2026-05-30',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'alimentos-ricos-em-magnesio',
    tag: 'Ingredientes',
    title: 'Alimentos ricos em magnésio: lista completa e dicas práticas',
    description: 'Magnésio está em sementes, oleaginosas e feijão. Veja 12 fontes com as quantidades por porção e como incluir mais na sua semana sem precisar de suplemento.',
    img: 'https://images.pexels.com/photos/7420982/pexels-photo-7420982.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Flatlay de amêndoas, sementes, lentilhas e nozes em tigelas de porcelana sobre superfície de madeira',
    date: '2026-05-30',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'cardapio-semanal-simples-caseiro',
    tag: 'Organização',
    title: 'Cardápio semanal simples caseiro: como montar do zero',
    description: 'Como montar um cardápio da semana: exemplo de 7 dias, como transformar em lista de compras e dicas pra não abandonar.',
    img: 'https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Família cozinhando juntos na cozinha de casa — cardápio semanal simples caseiro',
    date: '2026-05-31',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'para-que-serve-noz-moscada',
    tag: 'Ingredientes',
    title: 'Para que serve noz-moscada: usos e como usar na cozinha',
    description: 'Noz-moscada serve para arredondar sabores em pratos cremosos e doces. Saiba o que é, em quais receitas usar, a dose certa e como guardar sem perder o aroma.',
    img: 'https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Especiarias aromáticas em tigelas de cerâmica branca sobre superfície de madeira',
    date: '2026-05-31',
    dateLabel: 'Mai 2026',
  },
  {
    slug: 'o-que-e-gengibre',
    tag: 'Ingredientes',
    title: 'O que é gengibre: tipos, usos na cozinha e como guardar',
    description: 'Gengibre é um rizoma de sabor picante e aroma intenso. Saiba o que é, a diferença entre fresco e em pó, como usar nas receitas e como guardar sem perder.',
    img: 'https://images.pexels.com/photos/161556/pexels-photo-161556.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Raízes de gengibre fresco ao lado de pó de gengibre em recipiente metálico',
    date: '2026-06-01',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'o-que-e-pomelo',
    tag: 'Ingredientes',
    title: 'O que é pomelo: diferença da toranja e como comer',
    description: 'Pomelo é a maior fruta cítrica do mundo. Saiba o que é, a diferença pra toranja, como comer, onde comprar no Brasil e se vale colocar na lista.',
    img: 'https://images.pexels.com/photos/1411677/pexels-photo-1411677.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Fatias de frutas cítricas dispostas em mármore branco — limão, laranja e toranja em flatlay',
    date: '2026-06-01',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'o-que-e-granola',
    tag: 'Ingredientes',
    title: 'O que é granola: composição, tipos e como escolher',
    description: 'Granola é mistura de cereais torrados com oleaginosas e frutas secas. Saiba o que é, tipos, como consumir e como escolher no mercado.',
    img: 'https://images.pexels.com/photos/3872369/pexels-photo-3872369.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Granola com aveia, sementes e frutas secas em close-up — textura detalhada',
    date: '2026-06-02',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'oleo-de-canola',
    tag: 'Ingredientes',
    title: 'Óleo de canola: o que é, para que serve e como usar',
    description: 'O que é óleo de canola, se faz mal, qual o ponto de fumaça e quando usar no lugar do azeite — guia direto ao ponto.',
    img: 'https://images.pexels.com/photos/4910236/pexels-photo-4910236.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Óleo vegetal sendo vertido em frigideira durante cozimento em cozinha doméstica',
    date: '2026-06-03',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'dieta-low-carb-cardapio',
    tag: 'Organização',
    title: 'Cardápio low carb para 7 dias: refeições prontas pra copiar',
    description: '7 dias de refeições low carb do café ao jantar, com lista de compras pronta e dicas para não abandonar na quarta-feira.',
    img: 'https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Flat-lay de alimentos low carb: abacate, folhas verdes, oleaginosas e vegetais frescos',
    date: '2026-06-03',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'bicarbonato-de-sodio',
    tag: 'Ingredientes',
    title: 'Bicarbonato de sódio: o que é, usos na cozinha e dicas',
    description: 'Bicarbonato de sódio serve para fermentar massas, amaciar carne, cozinhar feijão e limpar panelas. Saiba a diferença do fermento e como usar certo.',
    img: 'https://images.pexels.com/photos/6996335/pexels-photo-6996335.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Vista de cima de tigela com ingredientes de confeitaria em superfície branca',
    date: '2026-06-04',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'lista-de-compras-saudavel',
    tag: 'Lista de compras',
    title: 'Lista de compras saudável: guia completo e o que incluir',
    description: 'O que colocar na lista de compras saudável por grupo alimentar, quanto custa por mês e dicas práticas para não sair do plano no mercado.',
    img: 'https://images.pexels.com/photos/8844888/pexels-photo-8844888.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Verduras e frutas frescas dispostas sobre mesa — vista de cima para lista de compras saudável',
    date: '2026-06-04',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'dieta-carnivora',
    tag: 'Organização',
    title: 'Dieta carnívora: o que é, alimentos e como começar',
    description: 'A dieta carnívora elimina plantas e mantém só alimentos de origem animal. Veja o que comer, o que cortar, cardápio de 7 dias e os riscos que precisa conhecer.',
    img: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Bife suculento grelhado com molho em prato — dieta carnívora',
    date: '2026-06-05',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'batata-doce',
    tag: 'Ingredientes',
    title: 'Batata doce: o que é, valor nutricional e como usar',
    description: 'Batata doce é um tubérculo com betacaroteno, fibras e carboidratos de baixo IG. Tipos, como escolher no mercado e como usar de verdade na cozinha.',
    img: 'https://images.pexels.com/photos/6060223/pexels-photo-6060223.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Batatas doces laranjas frescas em close-up sobre superfície escura',
    date: '2026-06-05',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'beneficios-do-rabanete',
    tag: 'Ingredientes',
    title: 'Benefícios do rabanete: o que é e como usar na cozinha',
    description: 'Rabanete tem vitamina C, fibra e apenas 16 kcal por 100g. Veja os benefícios, o valor nutricional e como usar esse legume barato sem desperdício.',
    img: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Rabanetes vermelhos frescos ao lado de cenouras sobre superfície de madeira',
    date: '2026-06-06',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'espinafre-beneficios',
    tag: 'Ingredientes',
    title: 'Espinafre: benefícios, valor nutricional e como usar',
    description: 'Espinafre tem 23 kcal e vitamina K acima de 400% do VD. Veja os benefícios, o que muda entre cru e cozido e como usar na cozinha sem perder os nutrientes.',
    img: 'https://images.pexels.com/photos/7195272/pexels-photo-7195272.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Folhas frescas de espinafre sobre fundo verde — close-up detalhado',
    date: '2026-06-06',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'alcaparras',
    tag: 'Ingredientes',
    title: 'Alcaparras: o que são, como usar e onde comprar no Brasil',
    description: 'Alcaparras são os botões florais do Mediterrâneo, conservados em salmoura ou sal grosso. Saiba o que são, como usar em receitas e onde encontrar no Brasil.',
    img: 'https://images.pexels.com/photos/18661674/pexels-photo-18661674.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Alcaparras em pote de vidro — botões florais conservados em salmoura',
    date: '2026-06-07',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'kiwi-beneficios',
    tag: 'Ingredientes',
    title: 'Kiwi: benefícios, nutrientes e como escolher no mercado',
    description: 'Kiwi tem mais vitamina C que a laranja, actinidina para digestão e 61 kcal por 100g. Veja os benefícios, os tipos disponíveis no Brasil e como guardar.',
    img: 'https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Kiwis frescos fatiados ao meio mostrando o interior verde com sementes pretas',
    date: '2026-06-08',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'o-que-e-cream-cheese',
    tag: 'Ingredientes',
    title: 'O que é cream cheese: tipos, usos e diferença do requeijão',
    description: 'Cream cheese é um queijo fresco macio com sabor ácido e textura firme. Saiba o que é, tipos, como usar na cozinha e como ele difere do requeijão.',
    img: 'https://images.pexels.com/photos/6858663/pexels-photo-6858663.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Sanduíche com cream cheese e tomates — queijo cremoso macio sobre pão',
    date: '2026-06-08',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'o-que-e-mirtilo',
    tag: 'Ingredientes',
    title: 'O que é mirtilo: tipos, benefícios e se vale o preço',
    description: 'Mirtilo é o blueberry europeu — pequeno, azul e rico em antioxidantes. Saiba o que é, os benefícios comprovados, como usar na cozinha e onde comprar no Brasil.',
    img: 'https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Mirtilos frescos em close-up — fruta azul-arroxeada rica em antocianinas',
    date: '2026-06-09',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'o-que-e-maca',
    tag: 'Ingredientes',
    title: 'O que é maçã: tipos, calorias e como usar na cozinha',
    description: 'Fuji, gala ou verde: cada tipo tem uso diferente na cozinha. Veja calorias, benefícios e como escolher no mercado.',
    img: 'https://images.pexels.com/photos/89434/pexels-photo-89434.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Maçã vermelha fresca em close-up sobre superfície escura — fruta da variedade gala',
    date: '2026-06-10',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'o-que-e-arroz-parboilizado',
    tag: 'Ingredientes',
    title: 'Arroz parboilizado: o que é, diferenças e como cozinhar',
    description: 'Arroz parboilizado passa por um pré-cozimento que preserva nutrientes do grão. Veja a diferença do branco e integral, como cozinhar e quando vale comprar.',
    img: 'https://images.pexels.com/photos/1311771/pexels-photo-1311771.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Bowl de arroz cozido com grãos soltos sobre superfície de madeira clara',
    date: '2026-06-10',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'azeite-de-oliva',
    tag: 'Ingredientes',
    title: 'Azeite de oliva: benefícios, tipos e como usar na cozinha',
    description: 'Extra virgem, virgem ou refinado: saiba a diferença, quais os benefícios comprovados, se pode fritar e como guardar sem perder a qualidade.',
    img: 'https://images.pexels.com/photos/6094524/pexels-photo-6094524.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Pessoa despejando azeite de oliva extra virgem sobre salada fresca com tomates',
    date: '2026-06-11',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'o-que-e-alho',
    tag: 'Ingredientes',
    title: 'Alho: o que é, benefícios e como usar na cozinha',
    description: 'Saiba o que é alho, os tipos disponíveis, como usar cru ou cozido, os benefícios comprovados e como guardar sem perder o aroma.',
    img: 'https://images.pexels.com/photos/1392585/pexels-photo-1392585.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Cabeças de alho sobre superfície marrom — bulbos inteiros com dentes visíveis',
    date: '2026-06-12',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'beneficios-do-pepino',
    tag: 'Ingredientes',
    title: 'Benefícios do pepino: tabela nutricional e como usar',
    description: 'Pepino tem 16 kcal por 100g e 95% de água. Veja os benefícios para saúde, o valor nutricional, os tipos disponíveis no Brasil e como usar na cozinha.',
    img: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Pepinos frescos inteiros empilhados em close-up — vegetais verdes brilhantes',
    date: '2026-06-13',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'o-que-e-ricota',
    tag: 'Ingredientes',
    title: 'Ricota: o que é, diferença do cottage e como usar',
    description: 'Ricota é feita do soro do leite, não do leite em si. Saiba o que é, a diferença do cottage e requeijão, o valor nutricional e como usar na cozinha.',
    img: 'https://images.pexels.com/photos/4109946/pexels-photo-4109946.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Close-up de queijo fresco branco e cremoso — ricota fresca para receitas',
    date: '2026-06-13',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'lista-de-compras-mercado',
    tag: 'Lista de compras',
    title: 'Lista de compras mercado: como organizar e gastar menos',
    description: 'Lista de compras para o mercado por categoria: hortifruti, carnes, laticínios, limpeza. Guia completo com dicas para gastar menos no supermercado.',
    img: 'https://images.pexels.com/photos/3985094/pexels-photo-3985094.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Família fazendo compras no supermercado com lista de compras na mão',
    date: '2026-06-14',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'o-que-e-cavala',
    tag: 'Ingredientes',
    title: 'O que é cavala: o peixe com mais ômega-3 que o salmão',
    description: 'Cavala é um peixe azul com 5.100mg de ômega-3 por 100g — mais que o salmão e o atum em conserva. Saiba o que é, onde comprar e como preparar.',
    img: 'https://images.pexels.com/photos/14616737/pexels-photo-14616737.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Cavala azul fresca sobre gelo em peixaria — peixe inteiro com coloração azul metálica',
    date: '2026-06-14',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'alimentos-ricos-em-proteinas',
    tag: 'Ingredientes',
    title: '10 alimentos ricos em proteínas para o dia a dia',
    description: 'Os 10 alimentos mais práticos em proteína: ovos, frango, feijão, atum. Quantidade por porção e como incluir sem suplemento na rotina.',
    img: 'https://images.pexels.com/photos/5966434/pexels-photo-5966434.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Flatlay de alimentos nutritivos variados — fontes de proteínas incluindo ovos e nozes',
    date: '2026-06-15',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'o-que-e-margarina',
    tag: 'Ingredientes',
    title: 'Margarina: o que é, diferença da manteiga e quando usar',
    description: 'Margarina é feita de óleos vegetais hidrogenados. Saiba a diferença da manteiga, os tipos disponíveis e quando usar cada uma em receitas.',
    img: 'https://images.pexels.com/photos/4577371/pexels-photo-4577371.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Pessoa espalhando manteiga ou margarina sobre fatia de pão — spread cremoso no café da manhã',
    date: '2026-06-15',
    dateLabel: 'Jun 2026',
  },
  {
    slug: 'frutas-citricas',
    tag: 'Ingredientes',
    title: 'Frutas cítricas: quais são, benefícios e como usar',
    description: 'Laranja, limão, tangerina, pomelo: guia completo das frutas cítricas com benefícios da vitamina C e dicas para escolher no mercado.',
    img: 'https://images.pexels.com/photos/1002778/pexels-photo-1002778.jpeg?auto=compress&cs=tinysrgb&w=800&h=480&fit=crop',
    imgAlt: 'Fatias de laranja fresca em close-up mostrando o interior suculento e segmentos cítricos',
    date: '2026-06-16',
    dateLabel: 'Jun 2026',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* NAV */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="/" className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </a>
          <nav className="nav-links">
            <NavDropdown />
            <a href="/blog" className="nav-link" style={{color: 'var(--carvao)'}}>Blog</a>
          </nav>
          <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-sm" target="_blank" rel="noopener">
            Comece grátis
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </header>

      <main>
        {/* HERO DO BLOG */}
        <section className="blog-index-hero">
          <div className="container">
            <div className="eyebrow"><span className="dot"></span> Blog</div>
            <h1>Dicas de quem faz lista de verdade</h1>
            <p className="blog-index-sub">Organização de cozinha, supermercado e planejamento semanal — sem frescura.</p>
            <p className="blog-hero-desc">
              Aqui você encontra guias práticos sobre listas de compras, organização de despensa
              e planejamento de refeições. Sem técnicas mirabolantes nem produtos caros — só o
              que funciona pra quem cozinha em casa de verdade. Cada artigo vem com listas pra
              copiar, estimativas de custo e respostas diretas às dúvidas mais comuns.
            </p>
          </div>
        </section>

        {/* TEMAS */}
        <section className="blog-index-topics">
          <div className="container">
            <h2 className="blog-index-topics-title">O que você encontra aqui</h2>
            <div className="blog-index-topics-grid">
              <div className="blog-index-topic">
                <h3>Listas de compras</h3>
                <p>
                  Guias completos com itens organizados por grupo, estimativas de custo por perfil
                  de família e dicas práticas para diferentes situações — casa nova, mês apertado,
                  família grande, casal. Cada lista foi pensada para você copiar e adaptar, não
                  começar do zero toda semana.
                </p>
                <p>
                  Você vai encontrar desde a lista básica de supermercado com os 80 itens que
                  quase todo mundo precisa até listas específicas por situação: mudança, festa,
                  churrasco, cesta básica. Sem itens exóticos que você nunca vai usar.
                </p>
              </div>
              <div className="blog-index-topic">
                <h3>Organização de despensa e geladeira</h3>
                <p>
                  Como organizar a despensa por zonas, que recipientes usar, como rotular, por onde
                  começar quando está tudo bagunçado — e como manter organizado no dia a dia sem
                  precisar de um domingo inteiro para reorganizar tudo de novo.
                </p>
                <p>
                  Sem produtos caros, sem estética de revista de decoração. O foco é funcional:
                  o que vai diminuir o desperdício, facilitar o acesso aos ingredientes mais usados
                  e fazer a despensa trabalhar pela sua rotina de cozinha.
                </p>
              </div>
              <div className="blog-index-topic">
                <h3>Planejamento de refeições e economia</h3>
                <p>
                  Como montar um cardápio semanal que respeite o tempo disponível e o orçamento,
                  por que planejar antes de ir ao mercado faz diferença na conta do mês e quais
                  hábitos simples cortam o gasto sem abrir mão do que você gosta de comer.
                </p>
                <p>
                  Pesquisas de comportamento de consumo mostram que compras sem lista custam entre
                  20% e 30% a mais. Os artigos aqui explicam como esse dado se traduz na sua
                  rotina — e o que fazer a respeito.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* POSTS */}
        <section className="blog-index-posts">
          <div className="container">
            <div className="blog-index-grid">
              {posts.map((post) => (
                <a key={post.slug} href={`/blog/${post.slug}`} className="blog-index-card">
                  <div className="blog-index-img">
                    <img
                      src={post.img}
                      alt={post.imgAlt}
                      width="800"
                      height="480"
                      loading="lazy"
                    />
                  </div>
                  <div className="blog-index-body">
                    <div className="blog-index-meta">
                      <span className="blog-card-tag">{post.tag}</span>
                      <span className="blog-index-date">{post.dateLabel}</span>
                    </div>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <span className="blog-card-link">Ler artigo →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="blog-index-cta">
          <div className="container">
            <div className="blog-index-cta-inner">
              <p>Já que você chegou até aqui — testa o app. É grátis.</p>
              <a href="https://listinha-puce.vercel.app" className="btn btn-primary" target="_blank" rel="noopener">
                Abrir o Mise →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand">
            <div className="brand-mark">
              <BrandIcon size={20} />
            </div>
            <span className="brand-name">Mise</span>
          </div>
          <p className="footer-copy">Feito com carinho pra quem gosta de cozinhar.</p>
          <a href="https://listinha-puce.vercel.app" className="footer-link" target="_blank" rel="noopener">Abrir o app →</a>
        </div>
      </footer>
    </>
  )
}
