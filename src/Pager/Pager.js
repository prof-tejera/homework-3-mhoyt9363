import "./Pager.css";

const Pager = ({pagerStatus}) => {

 const prepPages = [ 
    {display: '<',                              // paging down by one
    id: 'pagedown',
    handleClick: ()=>(alert('Use State Mgmt to Decrease Active Page by One'))
    },   
    {display: pagerStatus.startPage,            // starting page of the display
    id: 'startpage'
    },
    {display: '...',                            // filler
    id: 'filler1'
    }, 
    {display: pagerStatus.activePage,           // where the active page is now
    id: 'activepage'
    },
    {display: '...',                            // filler
    id: 'filler2'
    }, 
    {display: pagerStatus.endPage,              // ending (last) page of the dispay
    id: 'endpage'
    },
    {display: '>',                              // paging down by one
    id: 'pageup',
    handleClick: ()=>(alert('Use State Mgmt to Increase Active Page by One'))
    }
  ]
  const displayPages = prepPages.map ((item) => <span key={item.id} id={item.id} onClick={item.handleClick}> {item.display} </span>);

    return(
      <div className="displayPages">
        {displayPages}
      </div>
    )
};

export default Pager;
