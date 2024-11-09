import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Text({text='', className=''}) {
  return (
    <p className={`${className} ${montserrat.className}`}>{ text }</p>
  )
}