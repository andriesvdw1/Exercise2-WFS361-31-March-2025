
import './App.css'
import FeatureAccess from './components/FeatureAccess/FeatureAccess'
function App() {
  

  return (
    <div className='App'>
      <FeatureAccess plan ="basic" feature ="dashboard"/>
      <FeatureAccess plan ="premium"/>
      <FeatureAccess/>
    </div>
  )
}

export default App
