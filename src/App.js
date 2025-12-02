import React, { useEffect } from 'react';
import "./App.css"
import Table from "./components/Table"

function App() {

  useEffect(() => {
    // Krijojmë chat nga n8n
    import('https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js')
      .then(({ createChat }) => {
        createChat({
          webhookUrl: 'https://luert3.app.n8n.cloud/webhook/3d90c4b2-e8cf-449a-a5fa-fe914d83e250/chat',
          initialMessages: ['Përshëndetje! 👋 Unë jam asistenti juaj për rezervimin e makinave me qira. Si mund t\'ju ndihmoj sot?'],
          i18n: {
            en: {
              title: 'Asistenti i Rezervimit',
              subtitle: 'Rezervoni makinën tuaj',
              footer: '',
              getStarted: 'Filloni bisedën',
              inputPlaceholder: 'Shkruani mesazhin tuaj...',
            }
          }
        });
      });
  }, []);

  return (
    <div className="container">
      <Table/>
      {/* Chat-i do të shfaqet automatikisht nga createChat */}
    </div>
  );
}

export default App;
