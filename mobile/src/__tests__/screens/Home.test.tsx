import { render } from '@testing-library/react-native'

import { Home } from '@screens/Home'

describe("Screens: Home", () => {
    it("should render", () => {
        render(<Home />)
    })
})