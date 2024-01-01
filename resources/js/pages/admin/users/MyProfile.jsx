import { useEffect, useState } from 'react';
import Breadcrumb from '../../../components/Admin/Breadcrumb'
import './MyProfile.css';
import { GetFetchAuth } from '../../../hooks/Fetch.hook';

const MyProfile = () => {
    const [ loading, setLoading ] = useState(true);
    const [ profile, setProfile ] = useState([]);
    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)
                const getProfile = await GetFetchAuth('/api/user/myprofile');

                setProfile(getProfile[0]);
                setLoading(false);

            } catch (error) {
                console.log(error)
            }
        }
        fetchData();

    }, [])

    return (
        <div className="container">
            <div className="main-body">

                {/* <!-- Breadcrumb --> */}
                <Breadcrumb links={[
                    { name: "Administracion", href: "/admin" },
                    { name: "Mi cuenta", href: "/myprofile" },
                ]}/>
                {/* <!-- /Breadcrumb --> */}
                <div className="row gutters-sm mt-2">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    { loading ?
                                        <p>Cargando...</p>
                                    :
                                    <>
                                        <img src="../media/images/users/user2.jpg" alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>Jef4zo44</h4>
                                            <p className="text-secondary mb-1">Administrador</p>
                                            <p className="text-muted font-size-sm">Nando Agustin Bravo</p>
                                            <button className="btn btn-primary">Editar mi perfil</button>
                                        </div>
                                    </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                { loading ?
                                    <p>Cargando...</p>
                                :
                                <>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Nombre completo</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            Nando Agustin Bravo
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            example@gmail.com
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Telefono</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            +54 9 351 816-9029
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Direccion</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            Área de la bahía, San Francisco, California
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <a className="btn btn-primary " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                                        </div>
                                    </div>
                                </>
                                }
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;
