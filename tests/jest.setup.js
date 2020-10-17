import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { setConfig } from 'next/config'
import generateNextConfig from '../next.config'

setConfig({
  publicRuntimeConfig: generateNextConfig('', {}).publicRuntimeConfig,
})

Enzyme.configure({ adapter: new Adapter() })
