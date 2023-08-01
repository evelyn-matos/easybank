import articleCurrency from '../images/image-currency.jpg';
import articleRestaurant from '../images/image-restaurant.jpg';
import articlePlane from '../images/image-plane.jpg';
import articleConfetti from '../images/image-confetti.jpg';

import '../styles/components/articleItem.sass'

type Props = {
    image: string,
    title: string,
    desc: string,
    autor: string 
}

export default function ArticleItem() {
    const ItemArticle: Props[] = [
        {
            autor: 'Claire Robinson',
            image: articleCurrency,
            title: 'Receive money in any currency with no fees',
            desc: 'The world is getting smaller and we`re becoming more mobile. So why should you be forced to only receive money in a single...'
        },
        {
            autor: 'Wilson Hutton',
            image: articleRestaurant,
            title: 'Treat yourself without worryng about money',
            desc: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...'
        },
        {
            autor: 'Wilson Hutton',
            image: articlePlane,
            title: 'Take your Easybank card wherever you go',
            desc: 'We want you to enjoy your travels. This is why we don`t charge any fees on purchases while you`re abroad. We`ll even show you...'
        },
        {
            autor: 'Claire Robinson',
            image: articleConfetti,
            title: 'Our invite-only Beta accounts are now live!',
            desc: 'After a lot of hard work by the whole team, we`re excited to launch our closed beta. It`s easy to request an invite through the site...'
        }

    ]
  return (
    
    <div className='article-area'>
        {ItemArticle.map((item) => (
            <div className='article-item'>
                <img src={item.image} alt={item.title} />
                <div className='article-item-info'>
                    <span>By {item.autor}</span>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                </div>
            </div>
        ))}
    </div>
  )
}
