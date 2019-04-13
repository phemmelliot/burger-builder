import React, { Component } from 'react';
import Modal from '../../components/Modal';
import BurgerContext from '../../components/BurgerContext';

const withErrorHandler = (WrappedComponent, http) => {
  return class extends Component {
    constructor(props){
      super(props);

      this.state = {
        error: null
      }

      this.reqInterceptor = http.interceptors.request.use(request => {
        this.setState({
          error: null
        })
        return request;
      }, error => {
        console.log(error);
        Promise.reject(error);
      })

      this.responseInterceptor = http.interceptors.response.use(res => res, error => {
        this.setState({
          error,
        })
      })
    }

    componentWillUnmount(){
      http.interceptors.request.eject(this.reqInterceptor);
      http.interceptors.response.eject(this.responseInterceptor);
    }

    /**This componentDidMount interceptors intialization can't take care of errors that happens 
     * in lifecycles of the HOC's children */
    // componentDidMount() {
    //   http.interceptors.request.use(request => {
    //     this.setState({
    //       error: null
    //     })
    //     return request;
    //   }, error => {
    //     console.log(error);
    //     Promise.reject(error);
    //   })
    //   http.interceptors.response.use(res => res, error => {
    //     this.setState({
    //       error,
    //     })
    //   })
    // }

    closeErrorModal = () => {
      this.setState({
        error: null
      })
    }

    render() {
      const { error } = this.state;
      return (
        <>
          <BurgerContext.Provider value={{
            cancelModal: this.closeErrorModal
          }}>
            <Modal show={error}>
              {error && error.message}
            </Modal>
          </BurgerContext.Provider>
          <WrappedComponent {...this.props}/>
        </>
      );
    }
  }
}

export default withErrorHandler;
