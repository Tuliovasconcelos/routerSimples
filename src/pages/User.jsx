import React, { Component } from 'react'

class User extends Component {
    render() {
        //recebendo um array de objetos
        let list = [{
            name: "Túlio Vasconcelos",
            email: "tuliovst@gmail.com"
        },
        {
            name: "João Vasconcelos",
            email: "joao@gmail.com"
        }]
        return (
            <div>
                <table border="1">
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                    {list.map((item) => {
                        return <tr>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.email}
                            </td>
                        </tr>
                    })}
                </table>
            </div>
        )
    }
}
export default User