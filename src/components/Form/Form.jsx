import React, { useState } from 'react';
import './Form.css';
import { useEffect, useCallback } from 'react';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {

    const [nickname, setNickname] = useState('');
    const [elo, setElo] = useState('');
    const [division, setDivision] = useState('senior');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            nickname,
            elo,
            division
        }
        tg.sendData(JSON.stringify(data));
    }, [nickname, elo, division, tg])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    })

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    })

    useEffect(() => {
        if(!nickname || !elo) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [nickname, elo, tg])

    const onChangeNickname = (e) => {
        setNickname(e.target.value)
    }

    const onChangeElo = (e) => {
        setElo(e.target.value)
    }

    const onChangeDivision = (e) => {
        setDivision(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input 
                className={'input'} 
                type='text' 
                placeholder={'Ник'} 
                value={nickname}
                onChange={onChangeNickname}
            />
            <input 
                className={'input'} 
                type='text' 
                placeholder={'Ранг'}
                value={elo}
                onChange={onChangeElo} 
            />
            <select value={division} onChange={onChangeDivision}  className={'select'} >
                <option value={'senior'}>Старший девизион</option>
                <option value={'junior'}>Младший дивизион</option>
            </select>
        </div>
    );
};

export default Form;