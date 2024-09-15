import React from 'react';

import '../Error/error.css';

const Error = () => {
    return (
        <div>
            <main>
                <div className='Error'>
                <div className="hit-the-floor">404</div>
                <h1 className="textError">Oups ! La page que vous demandez n'existe pas.</h1>
                <a href="/Portfolio"><p className="return">Retourner sur le portfolio</p></a>
                </div>
            </main>
       </div>
    )
}
  
export default Error
