import React from 'react';

class ChildrenComponent extends React.Component {
    state = {
        showJob: false,
    }
    handleShowJob = (e) => {
        this.setState({ showJob: !this.state.showJob });
    }
    render() {
        let { arrJob } = this.props;
        let showjob = this.state.showJob;
        console.log(this.props)
        return (
            <>
                {
                    showjob === false ?


                        <div>
                            <button type='button' onClick={(e) => this.handleShowJob(e)}>Show</button>
                        </div>

                        :
                        <>
                            <div className='jobs' >
                                {
                                    arrJob.map((item, index) => {
                                        return (
                                            <>
                                                <div key={item.id}>
                                                    {item.title}- {item.salary}


                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <button type='button' onClick={(e) => this.handleShowJob(e)}>Hide</button>
                            </div>
                        </>

                }
            </>

        )
    }

}

export default ChildrenComponent;