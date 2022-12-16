import { Inter } from '@next/font/google'

// See https://beta.nextjs.org/docs/optimizing/fonts for more information.

// Every call is hosted as one instance in the application. Therefore, loading the same font function in multiple files hosts multiple instances. To avoid this, call the font loader in one shared file, export it as a constant, and import it in each file where required. See: https://beta.nextjs.org/docs/optimizing/fonts#reusing-fonts

// If loading a variable font, you don't need to specify the font weight.
const inter = Inter({ subsets: ['latin'] })

export default inter;