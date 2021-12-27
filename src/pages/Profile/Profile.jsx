import React, { useEffect, useState } from 'react'
import './profile.css'
import { createdAPIEndpoint, ENDPOINTS } from '../../api';
import { success, warn, info, error } from 'tata-js/src/tata'
import { useFormik } from 'formik'
import axios from 'axios';



const Profile = () => {

    const [user, setUser] = useState();


    function formatDate(date) {
        var newDate = date.split("T");
        return newDate[0];

    }


    useEffect(() => {
        axios.get(`https://localhost:5001/api/users/9`)
            .then(res => {
                let userInfoList = {
                    id: res.data.id,
                    name: res.data.name,
                    surname: res.data.surname,
                    username: res.data.username,
                    phone: res.data.phone,
                    email: res.data.email,
                    birthdate: formatDate(res.data.birthDate),
                    registerdate: formatDate(res.data.registerDate),
                    // password: res.data.password,
                    about: res.data.aboutMe
                };

                console.log(userInfoList);
                let apiResult = res.data
                console.log(apiResult)
                console.log("apiResult")


                setUser(userInfoList)

            })
            .catch(err => console.log(err))
        console.log("user", user)
    }, [])




    axios.get(`https://localhost:5001/api/users/9`)
        .then(res => {


        })
        .catch(err => console.log(err));

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            name: '',
            surname: '',
            username: '',
            phone: '',
            email: '',
            birthdate: '',
            registerdate: '',
            about: '',
        },
        onSubmit: values => {
            console.log(values);
            console.log(values.foodName);

            // axios.get(`https://localhost:5001/api/users/9${values.foodName}`)
            axios.get(`https://localhost:5001/api/users/9`)
                .then(res => {
                    let apiResult = res.data[0]
                    console.log(apiResult)
                    console.log("apiResult")

                    let newResult = {
                        name: '',
                        surname: '',
                        username: '',
                        phone: '',
                        email: '',
                        birthdate: '',
                        registerdate: '',
                        about: '',
                    }

                    // if (values.kcal != null) {
                    //     createdAPIEndpoint(ENDPOINTS.FOOD).create(newResult)
                    //         .then(res => {
                    //             console.log(res);
                    //             success('Başarılı', `${apiResult.foodName} başarıyla eklendi.`)
                    //         })
                    //         .catch(err => {
                    //             console.log(err)
                    //             error('Başarısız!', 'Ürün eklenemedi.')
                    //         });
                    // }


                })
                .catch(err => console.log(err))


        },
        // validationSchema: validations.foodValidations,

    })

















    return (
        <div class="container m-5" style={{ marginTop: '800px' }}>
            <div class="row gutters">
                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="account-settings">
                                <div class="user-profile">
                                    <div class="user-avatar d-flex justify-content-center">
                                        <img src="https://wallpaperaccess.com/full/1209397.jpg" alt="Maxwell Admin" />
                                    </div>
                                    {
                                        user &&
                                        <>
                                            <h5 class="user-name">{user.name} {user.surname}</h5>
                                            <h6 class="user-email">{user.email}</h6>
                                        </>
                                    }
                                </div>
                                <div class="about">
                                    <h5>Hakkımda</h5>
                                    {user && <p>{user.about}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                    <div class="card h-100">
                        <div class="card-body">
                            {user &&
                                <div class="row gutters">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 class="mb-4 text-primary">Kişisel Bilgiler</h6>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group mb-3">
                                            <label htmlFor='name' className='mb-1'>Ad</label>
                                            <input type="text" class="form-control" value={user.name} readonly  />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group mb-3">
                                            <label htmlFor='surname' className='mb-1'>Soyad</label>
                                            <input type="text" class="form-control" value={user.surname} readonly />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group mb-3">
                                            <label htmlFor='username' className='mb-1'>Kullanıcı Adı</label>
                                            <input type="url" class="form-control" value={user.username} readonly />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group mb-3">
                                            <label htmlFor='phone' className='mb-1'>Telefon</label>
                                            <input type="text" class="form-control" value={user.phone}  readonly />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group mb-3">
                                            <label htmlFor='email' className='mb-1'>E-posta</label>
                                            <input type="email" class="form-control" value={user.email} readonly/>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group mb-3">
                                            <label htmlFor="eMail" className='mb-1'>Cinsiyet</label>
                                            <select type="text" class="form-control" id="eMail" name="cars">
                                                <option value="erkek">Erkek</option>
                                                <option value="kadın">Kadın</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group mb-3">
                                            <label htmlFor='birthdate' className='mb-1'>Doğum Tarihi</label>
                                            <input type="date" class="form-control" value={user.birthdate}  readonly/>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group mb-3">
                                            <label htmlFor='registerdate' className='mb-1'>Kayıt Tarihi</label>
                                            <input type="date" class="form-control" value={user.registerdate}  readonly />
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="form-group mb-3">
                                            <label htmlFor='about' className='mb-1'>Hakkımda</label>
                                            <textarea rows={4} type="name" class="form-control" value={user.about}  readonly />
                                        </div>
                                    </div>
                                </div>
                            }

                            <div class="row gutters mt-4">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h6 class="mt-4 mb-3 text-primary">Şifre Değiştir</h6>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group mb-3">
                                        <label htmlFor="Street" className='mb-1'>Şifre</label>
                                        <input type="password" class="form-control" id="Street" placeholder="Enter Street" />
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group mb-3">
                                        <label htmlFor="ciTy" className='mb-1'>Şifre Tekrar</label>
                                        <input type="password" class="form-control" id="ciTy" placeholder="Enter City" />
                                    </div>
                                </div>
                            </div>

                            <div class="row gutters">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="text-right">
                                        <button type="button" id="submit" name="submit" class="btn btn-secondary ml-2">İptal</button>
                                        <button type="button" id="submit" name="submit" class="btn btn-primary m-2">Kaydet</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
