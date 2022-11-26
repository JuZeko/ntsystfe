import './ComponentsStyles.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function AddObject() {
    const [kaina, setkaina] = useState('');
    const [statybosMetai, setStatybosMetai] = useState('');
    const [pastatoTypas, setPastatoTypas] = useState('');
    const [plotas, setPlotas] = useState('');
    const [sildimoTypas, setSildimoTypas] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const objectInformation = { kaina, statybosMetai, pastatoTypas, plotas, sildimoTypas }

        console.log(JSON.stringify(objectInformation))



        fetch('https://localhost:7055/RealEstate', {
            method: 'POST',
            headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' },

            body: JSON.stringify(objectInformation)
        }).then(() => { console.log(JSON.stringify(objectInformation)) });
    }

    return (
        <div className='objectWrapper'>
            <div className='editObjectContainer'>
                <h3>Prideti nauja objekta</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="col-lg-3 control-label"> Kaina</label>
                        <div className="col-lg-8">
                            <input className="form-control" type="text" placeholder="Iveskite objekto kaina" value={kaina} onChange={(e) => setkaina(e.target.value)} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-lg-3 control-label">Statybos metai </label>
                        <div className="col-lg-8">
                            <input className="form-control" type="text" placeholder="Iveskite objekto statybos metus" value={statybosMetai} onChange={(e) => setStatybosMetai(e.target.value)} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-lg-3 control-label"> Pastato tipas </label>
                        <div className="col-lg-8">
                            <input className="form-control" type="text" placeholder="Iveskite objekto typa" value={pastatoTypas} onChange={(e) => setPastatoTypas(e.target.value)} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-lg-3 control-label"> Plotas </label>
                        <div className="col-lg-8">
                            <input className="form-control" type="text" placeholder="Iveskite objekto plota" value={plotas} onChange={(e) => setPlotas(e.target.value)} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-lg-3 control-label">Šildymo  tipas </label>
                        <div className="col-lg-8">
                            <input className="form-control" type="text" placeholder="Iveskite objekto sildymo tipa" value={sildimoTypas} onChange={(e) => setSildimoTypas(e.target.value)} />
                        </div>
                    </div>
                    <div className="mt-3">

                        <button type="submit" className="btn btn-primary me-1"  >TEST</button>
                        <Link to="/viewobjects">
                            <button type="button" className="btn btn-primary me-1">Prideti</button>
                        </Link>
                        <Link to="/viewobjects">
                            <button type="button" className="btn btn-primary">Atgal</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
