import iconOnline from '../images/icon-online.svg';
import iconBudgeting from '../images/icon-budgeting.svg';
import iconOnboarding from '../images/icon-onboarding.svg';
import iconapi from '../images/icon-api.svg';

import '../styles/components/choseItem.sass'

type Props = {
   icone: string
   title: string
   desc: string
}

export default function ChoseItem() {

    const ItemChose: Props[] = [
        {
            icone: iconOnline,
            title: 'Online Banking',
            desc: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
        },
        {
            icone: iconBudgeting,
            title: 'Simple Budgeting',
            desc: 'See exactly where your money goes each month. Receive notifications when you`re close to hitting your limits.'
        },
        {
            icone: iconOnboarding,
            title: 'Fast Onboarding',
            desc: 'We don`t do branches. Open your account in minutes online and start talking control of your finances right away.'
        },
        {
            icone: iconapi,
            title: 'Open Api',
            desc: 'Manage your savings, investiments, pension, and much more from one account. Tracking your money has never been easier'
        }

    ]
  return (
    <div className='choose-item-area'>
        {ItemChose.map((item) => (
            <div className='choose-item'>
                <img src={item.icone} alt={item.title} />
                <span>{item.title}</span>
                <p>{item.desc}</p>
            </div>
        ))}
    </div>
  )
}
