import React from 'react';

import '../Error/error.scss';

const Error = () => {
    return (
        <div>
            <main>
                <div className='Error'>
                <div className="hit-the-floor">404</div>
                <h1 className="textError">Oups ! La page que vous demandez n'existe pas.</h1>
                <a rel= "canonical" href="/Portfolio"><p className="return">Retourner sur le portfolio</p></a>
                </div>
            </main>
       </div>
    )
}
  
export default Error
