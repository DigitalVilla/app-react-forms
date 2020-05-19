import React from "react"
import FormWidget from "./components/FeedbackWidget"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Feedback Widget</h1>
      </header>
      <h2 className="subtitle">
        This element was biuilt to follow best accesibility and coding practices
        it is 100% AODA compliant.
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        aut quaerat numquam fuga vel odio eligendi impedit odit, fugiat aliquam
        enim, eius, vitae quidem eaque expedita asperiores fugit cumque earum
        praesentium modi est cumque! Porro pariatur, saepe ex officia atque
        dolorem ipsam! Animi quaerat impedit laboriosam aliquam odit sit at
        delectus consequatur, pariatur in, optio ut fuga accusantium placeat
        nemo. Atque ut vitae eum at aliquid nihil iste explicabo voluptas qui
        natus!
      </p>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        aut quaerat numquam fuga vel odio eligendi impedit odit, fugiat aliquam
        praesentium modi est cumque! Porro pariatur, saepe ex officia atque
        dolorem ipsam! Animi quaerat impedit laboriosam aliquam odit sit at
        natus!
      </p>
      <FormWidget />
    </div>
  )
}

export default App
