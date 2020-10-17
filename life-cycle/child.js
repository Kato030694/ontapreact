import React, { Component, PureComponent } from 'react'

class Child extends PureComponent {
    componentWillReceiveProps(nextProps){
        // su dung khi can kiem tra props cu va moi
        console.log("componentWillReceiveProps")
    }
    // shouldComponentUpdate(nextProps){
    //     // Quyet dinh component can render lai hay la khong
    //     // Khi nao can update va khong
    //     if(this.props.a !== nextProps.a){
    //         return true
    //     }
    //     return false
    // }
    // PureComponent se thay the cong viec shoulComponentUpdate
    // PureComponent co the su dung tat ca, nhung no se giong redux, su dung co che so sanh nong,
    // neu truyen vao Object thi se khong biet duoc su thay doi hay khong
    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate")
    }

    render() {
        console.log("render")
        return (
            <div>
                
            </div>
        )
    }
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate");
    }
}
export default (Child)