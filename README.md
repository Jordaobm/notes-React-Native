<h1 align="center">
  <img alt="icone" title="Notes" src="https://github.com/Jordaobm/notes-React-Native/blob/main/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png" />
</h1>

# Notes - React Native

Notes é uma app desenvolvido para Android usando React-Native com o intuito de aperfeiçoar minhas habilidades em React e em algumas libs. Nessa aplicação uso conceitos de componentização, gerenciamento de estados com a ContextAPI do React e seus ReactHooks para criar, editar e deletar notas e lembretes, de forma simples e rápida.

## 💡Ideia

O foco da aplicação e manter um visual simples e agradável ao usuário, onde ele interage com as funcionalidades de forma direta e fácil. Em Notes você pode criar, armazenar, editar e excluir notas e lembretes! Os lembretes em especial terão notificações inclusas. Quando a hora definida no lembrete chegar, a notifcação soará alertando o usuário.

## Ferramentas e bibliotecas utilizadas no projeto:

- React-Native (framework de desenvolvimento)
- @react-native-community/async-storage (AsyncStorage para manter notas e lembretes salvos)
- @react-native-community/datetimepicker (uso dos pickers nativos do sistema para setar datas)
- @react-navigation/native (navegação entre as telas da aplicação)
- @unform/core e @unform/mobile para lidar com os formulários da aplicação
- date-fns para formatação de datas
- react-native-vector-icons (icones auto-explicativos)
- react-native-paper (Modais)
- react-native-push-notification (Notificações locais para lembretes)
- react-native-markdown-display (Formato markdown para marcação de textos no corpo de notas e lembretes)
- Styled-Components (ferramenta para uso do css em forma de componentes React)

### Demais ferramentas e sites que auxiliaram na construção da UI

- Figma(UI design)

## Requisitos Funcionais:

- [x]  Poder criar notas!
- [x]  Poder editar as notas criadas!
- [x]  Excluir notas criadas!
- [x]  Armazenar as notas no AsyncStorage para que quando o usuário fechar o app elas estejam acessíveis posteriormente.
- [x]  Poder criar lembretes
- [x]  Poder colocar datas nos lembretes
- [x]  Poder editar os lembretes criados
- [x]  Poder deletar os lembretes
- [x]  Usar Markdown para formatar o texto dentro do corpo das notas e lembretes

## Requisitos Não Funcionais

- [x]  O usuário poderá listar suas notas e lembretes
- [x]  Terá um feedback visual quando algum lembrete expirar
- [x]  Fácil navegação entre telas
- [x]  Ambiente agradável e clean
- [x]  Os lembretes terão notificações locais. Quando a data selecionada expirar, uma notificação soará alertando o usuário.

## Criando uma nota

Na primeira página da aplicação encontram-se as notas. 

<h1 align="center">
  <img alt="Notes" width="300px" src="https://github.com/Jordaobm/notes-React-Native/blob/main/assets/documentation/01.png" />
</h1>

Você será direcionado para a página de criação de novas notas, onde poderá adicionar um título e um corpo à sua nota. Nestes campos são válidos todos os tipos de caracteres nativos do seu smarthphone.

<h1 align="center">
  <img alt="Notes" width="300px" src="https://github.com/Jordaobm/notes-React-Native/blob/main/assets/documentation/02.png" />
</h1>

## Criando um lembrete

Para criar um lembrete basta acessar a página de reminders pelos botões de navegação no rodapé da página, e você será direcionado para uma página idêntica à de notas, no entanto agora você está na sessão de lembretes. Para adicionar um novo lembrete basta clicar no botão verde no canto direito do rodapé da página.

<h1 align="center">
  <img alt="Notes" width="300px" src="https://github.com/Jordaobm/notes-React-Native/blob/main/assets/documentation/03.png" />
</h1>

Você será direcionado para a página de criação de novos lembretes, onde poderá adicionar um título, corpo e data para ser lembrado. Nestes campos são válidos todos os tipos de caracteres nativos do seu smarthphone. Ao finalizar a criação de seu lembrete, tenha em mente que a data para ser lembrado é obrigatória, e que não poderá criar um lembrete sem especificar uma data. 

<h1 align="center">
  <img alt="Notes" width="300px" src="https://github.com/Jordaobm/notes-React-Native/blob/main/assets/documentation/04.png" />
</h1>

Para adicionar uma data, clique no botão laranja. Ao clicar será aberto um modal conforme abaixo. Neste modal você poderá selecionar a data e a hora em que pretende ser lembrado.

<h1 align="center">
  <img alt="Notes" width="300px" src="https://github.com/Jordaobm/notes-React-Native/blob/main/assets/documentation/05.png" />
</h1>

Ao clicar em "Selecione uma data", o DatePicker nativo de seu dispositivo exibirá um calendário para que você selecione a data.

<h1 align="center">
  <img alt="Notes" width="300px" src="https://github.com/Jordaobm/notes-React-Native/blob/main/assets/documentation/06.png" />
</h1>

Após a seleção da data, selecione a hora em que pretende ser lembrado clicando em "Selecione a hora". **É muito importante que você selecione a data e a hora, pois caso algum desdes não seja selecionado não será possível a criação do lembrete.**

<h1 align="center">
  <img alt="Notes" width="300px" src="https://github.com/Jordaobm/notes-React-Native/blob/main/assets/documentation/07.png" />
</h1>

Após as seleções feitas, o modal informará em coloração verde a data selecionada. Caso corresponda com suas necessidades, você poderá clicar no botão verde "Salvar".

<h1 align="center">
  <img alt="Notes" width="300px" src="https://github.com/Jordaobm/notes-React-Native/blob/main/assets/documentation/08.png" />
</h1>

E então o modal será fechado e você retornará à página de criação de seu lembrete, agora sinalizado em verde à data em que você será lembrado. Para finalizar basta clicar no botão verde "Salvar" e então seu lembrete será agendado para a data selecionada. Lembretes "expirados" ficarão em vermelho na página de lembretes e seus detalhes, enquanto os lembretes que ainda não expiraram permanecerão em verde.

<h1 align="center">
  <img alt="Notes" width="300px" src="https://github.com/Jordaobm/notes-React-Native/blob/main/assets/documentation/11.png" />
</h1>

<h1 align="center">
  <img alt="Notes" width="300px" src="https://github.com/Jordaobm/notes-React-Native/blob/main/assets/documentation/12.png" />
</h1>

Por fim, quando chegar o momento, seu lembrete soará uma notificação em seu dispositivo, alertando-o. 

<h1 align="center">
  <img alt="Notes" width="300px" src="https://github.com/Jordaobm/notes-React-Native/blob/main/assets/documentation/10.png" />
</h1>
