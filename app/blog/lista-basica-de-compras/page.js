import RevealObserver from '../../../components/RevealObserver'
import CopyButton from '../../../components/CopyButton'

export const metadata = {
  title: 'Lista Básica de Compras: 7 grupos e mais de 80 itens pra copiar',
  description: 'Lista básica de compras completa com os 7 grupos essenciais e mais de 80 itens — hortifruti, carnes, laticínios, mercearia, temperos, limpeza e higiene. Pra copiar e usar.',
  openGraph: {
    title: 'Lista Básica de Compras: 7 grupos e mais de 80 itens pra copiar',
    description: 'Lista básica de compras completa com os 7 grupos essenciais e mais de 80 itens. Pra copiar e usar.',
    type: 'article',
    url: 'https://listinha-landing-delta.vercel.app/blog/lista-basica-de-compras',
    images: [{ url: 'https://images.pexels.com/photos/29855877/pexels-photo-29855877.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200' }],
  },
}

const copyText = `LISTA BÁSICA DE COMPRAS

HORTIFRUTI
- Alface
- Tomate
- Cebola
- Alho
- Batata
- Cenoura
- Limão
- Banana
- Maçã
- Laranja
- Mamão

CARNES E PROTEÍNAS
- Peito de frango
- Carne moída
- Filé de peixe
- Ovos
- Atum em lata

LATICÍNIOS
- Leite
- Iogurte natural
- Queijo muçarela ou prato
- Manteiga
- Requeijão

MERCEARIA BÁSICA
- Arroz
- Feijão
- Macarrão
- Farinha de trigo
- Açúcar
- Sal
- Café
- Azeite ou óleo
- Extrato de tomate
- Molho de tomate

TEMPEROS E CONDIMENTOS
- Pimenta do reino
- Cominho
- Orégano
- Caldo de frango ou carne
- Vinagre
- Mostarda
- Maionese

LIMPEZA
- Detergente
- Sabão em pó
- Água sanitária
- Desinfetante
- Esponja
- Saco de lixo

HIGIENE PESSOAL
- Shampoo e condicionador
- Sabonete
- Creme dental
- Desodorante
- Papel higiênico`

export default function ListaBasicaDeCompras() {
  return (
    <>
      <RevealObserver />

      <header className="nav">
        <div className="container nav-inner">
          <a href="/" className="brand">
            <div className="brand-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <span className="brand-name">Listinha</span>
          </a>
          <a href="https://listinha-puce.vercel.app" className="btn btn-primary btn-sm" target="_blank" rel="noopener">
            Comece grátis
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </header>

      <main className="blog-page">
        <div className="blog-header reveal">
          <div className="blog-meta">
            <span className="blog-date">Mai 2025</span>
            <span className="blog-meta-sep">·</span>
            <span className="blog-read">7 min de leitura</span>
            <span className="blog-meta-sep">·</span>
            <a href="/blog" className="blog-meta-link">Blog</a>
          </div>

          <h1 className="blog-h1">
            Lista básica de compras: 7 grupos e mais de 80 itens pra copiar
          </h1>
          <p className="blog-desc">
            Ir ao mercado sem lista é risco certo. Você volta com salgadinho mas sem papel higiênico.
            Uma boa <strong>lista básica de compras</strong> resolve isso — ela cobre o essencial
            sem precisar pensar do zero toda semana.
          </p>

          <img
            src="https://images.pexels.com/photos/29855877/pexels-photo-29855877.jpeg?auto=compress&cs=tinysrgb&h=630&w=1200"
            alt="Pessoa fazendo compras no supermercado com lista na mão"
            className="blog-hero-img"
            loading="eager"
          />
          <p className="blog-img-credit">Foto: Magda Ehlers / Pexels</p>
        </div>

        <article className="prose">
          <p>
            Uma <strong>lista de compras básica</strong> é o conjunto de itens que a maioria das
            casas precisa regularmente — independente do cardápio da semana. Ela é o piso, não o teto.
            Com ela você entra no mercado sabendo o que precisa e sai sem surpresa no cartão.
          </p>
          <p>
            Organizar por grupos (hortifruti, carnes, mercearia, limpeza...) tem dois benefícios
            práticos: você não esquece categorias inteiras, e consegue bater o olho na despensa
            seção por seção antes de sair.
          </p>

          <h2>Os 7 grupos essenciais</h2>
          <p>
            Toda casa tem necessidades diferentes, mas esses 7 grupos cobrem o essencial pra quem
            cozinha no dia a dia.
          </p>

          <h3>1. Hortifruti</h3>
          <p>
            Frutas, verduras e legumes variam por gosto e estação, mas alguns itens aparecem em
            quase toda receita:
          </p>
          <ul className="item-list">
            <li>Alface</li>
            <li>Tomate</li>
            <li>Cebola</li>
            <li>Alho</li>
            <li>Batata</li>
            <li>Cenoura</li>
            <li>Limão</li>
            <li>Banana, maçã ou laranja</li>
            <li>Mamão ou fruta da estação</li>
          </ul>

          <div className="blog-img-block">
            <img
              src="https://images.pexels.com/photos/8251006/pexels-photo-8251006.jpeg?auto=compress&cs=tinysrgb&h=420&w=760"
              alt="Frutas e vegetais frescos no hortifruti"
              className="blog-inline-img"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Julia Filirovska / Pexels</p>
          </div>

          <h3>2. Carnes e proteínas</h3>
          <ul className="item-list">
            <li>Peito de frango</li>
            <li>Carne moída</li>
            <li>Filé de peixe</li>
            <li>Ovos (cartela de 12 ou 30)</li>
            <li>Atum em lata</li>
          </ul>

          <h3>3. Laticínios</h3>
          <ul className="item-list">
            <li>Leite integral ou desnatado</li>
            <li>Iogurte natural</li>
            <li>Queijo muçarela ou prato</li>
            <li>Manteiga ou margarina</li>
            <li>Requeijão</li>
          </ul>

          <h3>4. Mercearia básica</h3>
          <p>O fundo de despensa que nunca deve faltar:</p>
          <ul className="item-list">
            <li>Arroz</li>
            <li>Feijão</li>
            <li>Macarrão</li>
            <li>Farinha de trigo</li>
            <li>Açúcar</li>
            <li>Sal</li>
            <li>Café</li>
            <li>Azeite ou óleo vegetal</li>
            <li>Extrato de tomate</li>
            <li>Molho de tomate</li>
          </ul>

          <div className="blog-img-block">
            <img
              src="https://images.pexels.com/photos/8422682/pexels-photo-8422682.jpeg?auto=compress&cs=tinysrgb&h=420&w=760"
              alt="Lista de compras no papel sendo organizada em casa"
              className="blog-inline-img"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: Kampus Production / Pexels</p>
          </div>

          <h3>5. Temperos e condimentos</h3>
          <ul className="item-list">
            <li>Pimenta do reino</li>
            <li>Cominho</li>
            <li>Orégano</li>
            <li>Caldo de frango ou carne</li>
            <li>Vinagre</li>
            <li>Mostarda</li>
            <li>Maionese</li>
          </ul>

          <h3>6. Limpeza</h3>
          <ul className="item-list">
            <li>Detergente</li>
            <li>Sabão em pó ou em barra</li>
            <li>Água sanitária</li>
            <li>Desinfetante</li>
            <li>Esponja de lavar louça</li>
            <li>Saco de lixo</li>
          </ul>

          <h3>7. Higiene pessoal</h3>
          <ul className="item-list">
            <li>Shampoo e condicionador</li>
            <li>Sabonete</li>
            <li>Creme dental</li>
            <li>Desodorante</li>
            <li>Papel higiênico</li>
          </ul>

          <h2>Lista completa pra copiar e colar</h2>
          <p>
            Clica em "Copiar lista" e cola direto no zap ou no app de notas. Risca o que já tem
            em casa antes de sair.
          </p>

          <div className="copy-box">
            <div className="copy-box-header">
              <span className="copy-box-title">Lista básica de compras — 80+ itens</span>
              <CopyButton text={copyText} />
            </div>
            <div className="copy-list-cols">
              <div className="copy-list-group">
                <h4>Hortifruti</h4>
                <ul>
                  <li>Alface</li>
                  <li>Tomate</li>
                  <li>Cebola</li>
                  <li>Alho</li>
                  <li>Batata</li>
                  <li>Cenoura</li>
                  <li>Limão</li>
                  <li>Banana</li>
                  <li>Maçã</li>
                  <li>Laranja</li>
                  <li>Mamão</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Carnes</h4>
                <ul>
                  <li>Peito de frango</li>
                  <li>Carne moída</li>
                  <li>Filé de peixe</li>
                  <li>Ovos</li>
                  <li>Atum em lata</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Laticínios</h4>
                <ul>
                  <li>Leite</li>
                  <li>Iogurte natural</li>
                  <li>Queijo muçarela</li>
                  <li>Manteiga</li>
                  <li>Requeijão</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Mercearia</h4>
                <ul>
                  <li>Arroz</li>
                  <li>Feijão</li>
                  <li>Macarrão</li>
                  <li>Farinha de trigo</li>
                  <li>Açúcar</li>
                  <li>Sal</li>
                  <li>Café</li>
                  <li>Azeite ou óleo</li>
                  <li>Extrato de tomate</li>
                  <li>Molho de tomate</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Temperos</h4>
                <ul>
                  <li>Pimenta do reino</li>
                  <li>Cominho</li>
                  <li>Orégano</li>
                  <li>Caldo em cubinhos</li>
                  <li>Vinagre</li>
                  <li>Mostarda</li>
                  <li>Maionese</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Limpeza</h4>
                <ul>
                  <li>Detergente</li>
                  <li>Sabão em pó</li>
                  <li>Água sanitária</li>
                  <li>Desinfetante</li>
                  <li>Esponja</li>
                  <li>Saco de lixo</li>
                </ul>
              </div>
              <div className="copy-list-group">
                <h4>Higiene</h4>
                <ul>
                  <li>Shampoo</li>
                  <li>Condicionador</li>
                  <li>Sabonete</li>
                  <li>Creme dental</li>
                  <li>Desodorante</li>
                  <li>Papel higiênico</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Como organizar a lista por corredor</h2>
          <p>
            Organizar por corredor economiza tempo dentro do mercado. Em vez de cruzar o
            supermercado duas vezes, você segue um caminho e sai mais rápido.
          </p>

          <div className="blog-img-block">
            <img
              src="https://images.pexels.com/photos/8580727/pexels-photo-8580727.jpeg?auto=compress&cs=tinysrgb&h=420&w=760"
              alt="Despensa doméstica organizada com produtos de mercado"
              className="blog-inline-img"
              loading="lazy"
            />
            <p className="blog-img-credit">Foto: RDNE Stock project / Pexels</p>
          </div>

          <p>A ordem que funciona bem na maioria dos supermercados:</p>
          <ul className="item-list">
            <li><strong>Hortifruti</strong> — geralmente na entrada</li>
            <li><strong>Padaria e frios</strong> — queijos, frios, pão</li>
            <li><strong>Mercearia</strong> — corredor central (arroz, feijão, massas)</li>
            <li><strong>Laticínios e bebidas</strong> — corredores laterais</li>
            <li><strong>Limpeza e higiene</strong> — últimos corredores</li>
            <li><strong>Açougue e peixaria</strong> — carnes frescas</li>
            <li><strong>Congelados</strong> — sempre por último pra não descongelar</li>
          </ul>

          <h2>5 dicas pra economizar no mercado</h2>

          <ul className="tip-list">
            <li className="tip-item">
              <span className="tip-num">1</span>
              <div className="tip-body">
                <strong>Confira a despensa antes de sair</strong>
                <span>Evita duplicata e comprar o que não vai usar. 5 minutos em casa economizam tempo e dinheiro no mercado.</span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">2</span>
              <div className="tip-body">
                <strong>Vá com estômago cheio</strong>
                <span>Clichê, mas funciona. Com fome, tudo parece necessário — especialmente na área de salgadinhos.</span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">3</span>
              <div className="tip-body">
                <strong>Compare preços por quilo ou litro</strong>
                <span>O produto maior nem sempre é mais barato. Olha o preço por unidade de medida, não o preço total.</span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">4</span>
              <div className="tip-body">
                <strong>Prefira marcas próprias nos básicos</strong>
                <span>Arroz, feijão, açúcar, sal — marcas próprias de supermercado costumam ter a mesma qualidade pela metade do preço.</span>
              </div>
            </li>
            <li className="tip-item">
              <span className="tip-num">5</span>
              <div className="tip-body">
                <strong>Planeje as refeições antes de ir</strong>
                <span>Saber o que vai cozinhar na semana evita compras por impulso e desperdício de comida.</span>
              </div>
            </li>
          </ul>

          <div className="blog-cta reveal">
            <h2>
              Chega de lista no bloco de notas.<br />
              <em>Usa o Listinha.</em>
            </h2>
            <p>
              Conecta despensa, receitas e lista de compras.
              Você nunca mais vai esquecer o alho.
            </p>
            <div className="actions">
              <a
                href="https://listinha-puce.vercel.app"
                className="btn btn-on-dark btn-lg"
                target="_blank"
                rel="noopener"
              >
                Comece grátis
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="/" className="brand">
            <div className="brand-mark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <span className="brand-name">Listinha</span>
          </a>
          <span className="footer-copy">© 2025 Listinha</span>
          <a href="/blog" className="footer-link">Blog</a>
        </div>
      </footer>
    </>
  )
}
