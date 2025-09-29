import { useState } from 'react';
import './App.scss';
import Tiket from './components/Tiket';
import Letter from './components/Letter';
import LetterWhite from './components/LetterWhite';

function App() {
  const [open, setOpen] = useState({
    open1: false,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
    open6: false,
  })

  const handleClick = (key) => {
    setOpen((prev) => {
      const allFalse = Object.keys(prev).reduce((acc, k) => {
        acc[k] = false;
        return acc;
      }, {});

      if(key===null){
        return { ...allFalse};
      } else {
        return { ...allFalse, [key]: !prev[key] };
      }
    });

  }

  return (
    <div className="main-card">
      <span className='title'>To You ...</span>
      <div style={{marginTop: '3rem'}}>
        <div>
          <div className='menu' onClick={() => handleClick('open1')}>
            <div>
              <span>10</span>
              <span>Years</span>
            </div>
            <span>From now..</span>
          </div>
          <div className='menu' onClick={() => handleClick('open2')}>
            <div>
              <span>20</span>
              <span>Years</span>
            </div>
            <span>From now..</span>
          </div>
        </div>
        <div>
          <div className='menu' onClick={() => handleClick('open3')}>
            <div>
              <span>30</span>
              <span>Years</span>
            </div>
            <span>From now..</span>
          </div>
        </div>
        <div>
          <div className='menu' onClick={() => handleClick('open4')}>
            <div>
              <span>40</span>
              <span>Years</span>
            </div>
            <span>From now..</span>
          </div>
          <div className='menu' onClick={() => handleClick('open5')}>
            <div>
              <span>50</span>
              <span>Years</span>
            </div>
            <span>From now..</span>
          </div>
        </div>
        <div>
          <div className='menu' onClick={() => handleClick('open6')}>
            <span style={{fontSize: '1rem', fontWeight: 'bold', marginTop: '.5rem'}}>And even after 50 years...</span>
          </div>
        </div>
        <span style={{fontSize: '.7rem', fontWeight: 'bold'}}>I wish this will be another reason you smile today, tomorrow, and anytime when you remember this ❤</span>
      </div>

      {(open.open1 || open.open2 || open.open3 || open.open4 || open.open5 || open.open6) && (
        <div className='popup' onClick={() => handleClick(null)}>
          <div className='card' onClick={(e) => e.stopPropagation()}>
            <div className='title'>{
              open.open1 ? '10 Years from now...'
              : open.open2 ? '20 Years from now...'
              : open.open3 ? '30 Years from now...'
              : open.open4 ? '40 Years from now...'
              : open.open5 ? '50 Years from now...'
              : 'And even after 50 years...'}
            </div>
            <div className='body'>
              {open.open1 &&
                <span>
                  This may sound silly but this is my wish for you
                  <p/>I wish anything you wish for will be granted
                  <p/>We may have fought, cry, and blaming each other
                  <p/>But that's the part of relationship
                  <p/>It's part of growing together
                  <p/>So i wish even after all that obstacle,
                  <p/>Your love for me will not decrease
                  <p/>Not even a little bit
                  <p/>And I asure you that even after all that
                  <p/>My love will grow as we grow old together
                </span>
              }
              {open.open2 &&
                <span>
                  Everyday I pray,
                  <p/>Praying that you'll get everything you want in life
                  <p/>Happiness, peace, comfort, wellbeing, anything
                  <p/>And in every pray i wish,
                  <p/>Wishing there's me in everything you want
                  <p/>Maybe the world thinks my love is too much
                  <p/>But loving you is never enough
                  <p/>Never for this short time of a human
                </span>
              }
              {open.open3 &&
                <span>
                  When i create this, we've been together for 3 years,
                  <p/>And even after 30 years, i wish for eternity with you
                  <p/>Maybe the world thinks it's too early
                  <p/>Too early for me to wish eternity with you
                  <p/>But the moments we've spent together
                  <p/>The days we've been through
                  <p/>Every second of it is a blessing for me
                  <p/>And I hope it is for you too
                </span>
              }
              {open.open4 &&
                <span>
                  I always picture the happy little family we build together
                  <p/>At this time, if we're blessed with children
                  <p/>Maybe home will be a little chaotic
                  <p/>But still be filled with laugh
                  <p/>And at that time,
                  <p/>I want you to remember all that path we go through may not be smooth
                  <p/>But even rocky mountains, wavy sea, and deep valley,
                  <p/>Feels like a walk in a park with you
                  <p/>And I wish you'll feel the same
                </span>
              }
              {open.open5 &&
                <span>
                  And for this human lifetime I pray,
                  <p/>We can read this together 50 years from now
                  <p/>Reminiscing about the past,
                  <p/>The past that is now
                  <p/>And when that time comes,
                  <p/>We'll smile, laugh, and cry happy tears
                  <p/>And I wish, when that time comes,
                  <p/>You'll have no regrets,
                  <p/>Not for all the moments we've spent together
                </span>
              }
              {open.open6 &&
                <span>
                  And i wish,
                  <p/>Even after 50 years from now
                  <p/>You'll never feel lonely,
                  <p/>Not even a second
                  <p/>Cause there's always be me
                  <p/>In every Second of your life
                  <p/>So please, don't ever get tired of me
                </span>
              }
            </div>
            <div className='footer'>
              {open.open1 && 
                <div>
                  <Tiket value='020051' style={{transform: 'rotate(2deg) scale(.8)', bottom: -30, right: 5}}/>
                  <Tiket value='020052' style={{transform: 'rotate(-2deg) scale(.8)', bottom: -2, left: 4}}/>
                </div>
              }
              {open.open3 && 
                <div style={{display: 'flex'}}>
                  <Letter style={{bottom: '-3.5rem', left: '2.5rem', transform: 'rotate(5deg) scale(.8)'}}/>
                  <Letter flip style={{bottom: '-5rem', right: '2.2rem', transform: 'rotate(-7deg) scale(.8)', zIndex: 1}}/>
                </div>
              }
              {open.open5 && 
                <div style={{display: 'flex'}}>
                  <LetterWhite style={{bottom: '-.5rem', left: '1.5rem', transform: 'rotate(5deg) scale(.8)'}}/>
                  <LetterWhite fromMe style={{bottom: '-.5rem', right: '1.5rem', transform: 'rotate(-2deg) scale(.8)', zIndex: 1}}/>
                </div>
              }
            </div>
          </div>
        </div>
      )
      }
    </div>
  );
}

export default App;
