import React from 'react'
import '../Login/login.css'



const Login = () => {
    return (
        // <div className="login-wrapper">
        //     <h1>Please Log In</h1>
        //     <form>
        //         <label>
        //             <p>Username</p>
        //             <input type="text" />
        //         </label>
        //         <label>
        //             <p>Password</p>
        //             <input type="password" />
        //         </label>
        //         <div>
        //             <button type="submit">Submit</button>
        //         </div>
        //     </form>
        // </div>


        <div className="d-lg-flex half">
           <div className="bg order-1 order-md-2" style={{backgroundImage: "url(https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_960_720.jpg)"}}></div>
            
            <div className="contents order-2 order-md-1">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7">
                            
                            <h3>Hoşgeldiniz <strong>Gutenberg Bookshelf</strong></h3>
                            
                            <form action="#" method="post">
                                <div className="form-group first">
                                    <label for="username">Kullanıcı Adı</label>
                                    <input type="text" className="form-control" placeholder="Kullanıcı Adı" id="username" />
                                </div>
                                <div className="form-group last mb-3">
                                    <label for="password">Şifre</label>
                                    <input type="password" className="form-control" placeholder="Şifre" id="password" />
                                </div>


                                <button className='btn btn-danger btn-sm btn-raudus'>Giriş Yap</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>











    )
}

export default Login
