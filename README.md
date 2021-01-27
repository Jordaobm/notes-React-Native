![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4c7f6447-dbf3-4ace-a1b3-d4a3a55c9bcc/ic_launcher.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4c7f6447-dbf3-4ace-a1b3-d4a3a55c9bcc/ic_launcher.png)

# Projeto Notes - React Native

Notes é uma app desenvolvido para Android usando React-Native com o intuito de aperfeiçoar minhas habilidades em React-Native e em algumas libs. Nessa aplicação uso conceitos de componentização, gerenciamento de estados com a ContextAPI do React e seus ReactHooks.

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
- Styled-Components (ferramenta para uso do css em forma de componentes React)

### Demais ferramentas e sites que auxiliaram na construção da UI

- Figma(UI design)
- VectorIcons

# 💡Ideia

Criar, armazenar, editar e excluir notas e lembretes! Os lembretes em especial terão notificações inclusas. Quando a hora defina no lembrete chegar, a notifcação soará alertando o usuário.

## Requisitos Funcionais:

- [x]  Poder criar notas!
- [x]  Poder editar as notas criadas!
- [x]  Excluir notas criadas!
- [x]  Armazenar as notas no AsyncStorage para que quando o usuário fechar o app elas estejam acessíveis posteriormente.
- [x]  Poder criar lembretes
- [x]  Poder colocar datas nos lembretes
- [x]  Poder editar os lembretes criados
- [x]  Poder deletar os lembretes

## Requisitos Não Funcionais

- [x]  O usuário poderá listar suas notas e lembretes
- [x]  Terá um feedback visual quando algum lembrete expirar
- [x]  Fácil navegação entre telas
- [x]  Ambiente agradável e clean
- [x]  Os lembretes terão notificações locais. Quando a data selecionada expirar, uma notificação soará alertando o usuário.

## Criando uma nota

Na primeira página da aplicação encontram-se as notas. Para adicionar uma nova nota basta clicar no botão roxo no canto direito do rodapé da página.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/59ab9d12-3caf-4dda-b890-977d457433f9/Notes.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/59ab9d12-3caf-4dda-b890-977d457433f9/Notes.jpg)

Você será direcionado para a página de criação de novas notas, onde poderá adicionar um título e um corpo à sua nota. Nestes campos são válidos todos os tipos de caracteres nativos do seu smarthphone.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0e0d6c24-19aa-4ba3-8452-e647aafd47bc/NewNotes.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0e0d6c24-19aa-4ba3-8452-e647aafd47bc/NewNotes.jpg)

# Usando o Aplicativo

## Criando um lembrete

Para criar um lembrete basta acessar a página de reminders pelos botões de navegação no rodapé da página, e você será direcionado para uma página idêntica à de notas, no entanto agora você está na sessão de lembretes. Para adicionar um novo lembrete basta clicar no botão verde no canto direito do rodapé da página.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a6825580-1bbc-434c-889a-0859a31c7652/Reminders.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a6825580-1bbc-434c-889a-0859a31c7652/Reminders.jpg)

Você será direcionado para a página de criação de novos lembretes, onde poderá adicionar um título, corpo e data para ser lembrado. Nestes campos são válidos todos os tipos de caracteres nativos do seu smarthphone. Ao finalizar a criação de seu lembrete, tenha em mente que a data para ser lembrado é obrigatória, e que não poderá criar um lembrete sem especificar uma data. 

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/30ba11c9-1feb-4a84-932c-47ebbdeab9bf/NewReminder.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/30ba11c9-1feb-4a84-932c-47ebbdeab9bf/NewReminder.jpg)

Para adicionar uma data, clique no botão laranja. Ao clicar será aberto um modal conforme abaixo. Neste modal você poderá selecionar a data e a hora em que pretende ser lembrado.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c36e47b8-4cf7-4559-802e-846b71845ed1/modal.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c36e47b8-4cf7-4559-802e-846b71845ed1/modal.jpg)

Ao cliclar em "Selecione uma data", o DatePicker nativo de seu dispositivo exibirá um calendário para que você selecione a data.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a66f4f66-78cc-4afa-99f7-843fa47d537d/datepickerdate.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a66f4f66-78cc-4afa-99f7-843fa47d537d/datepickerdate.jpg)

Após a seleção da data, selecione a hora em que pretende ser lembrado clicando em "Selecione a hora". **É muito importante que você selecione a data e a hora, pois caso algum desdes não seja selecionado não será possível a criação do lembrete.**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c784f78c-1f7a-49cb-9da0-1726c2308dbf/datepickertime.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c784f78c-1f7a-49cb-9da0-1726c2308dbf/datepickertime.jpg)

Após as seleções feitas, o modal informará em coloração verde a data selecionada. Caso corresponda com suas necessidades, você poderá clicar no botão verde "Salvar".

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4be1955d-f9bc-4488-b89b-0f09e2356be4/modal-data-preenchida.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4be1955d-f9bc-4488-b89b-0f09e2356be4/modal-data-preenchida.jpg)

E então o modal será fechado e você retornará à página de criação de seu lembrete, agora sinalizado em verde à data em que você será lembrado. Para finalizar basta clicar no botão verde "Salvar" e então seu lembrete será agendado para a data selecionada. Lembretes "expirados" ficarão em vermelho na página de lembretes, enquanto os lembretes que ainda não expiraram permanecerão em verde

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4cbba087-fb7b-4452-b115-f10ceb5e2519/datapreenchida.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4cbba087-fb7b-4452-b115-f10ceb5e2519/datapreenchida.jpg)

Por fim, quando chegar o momento, seu lembrete soará uma notificação em seu dispositivo, alertando-o. 

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/62566d71-7afd-4181-ad5d-37f672d6a9d6/Notificao.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/62566d71-7afd-4181-ad5d-37f672d6a9d6/Notificao.jpg)