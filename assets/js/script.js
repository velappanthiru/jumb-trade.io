$(document).ready(function(){
    let baseURL = window.location.origin;


    pointTable();


    function pointTable() {
        $.ajax({
            url : baseURL + '/jumb-trade.io/public/js/json/table.json',
            method : 'get'
        }).done(function(res){
            let content = '';

            $.each(res,function(ind,val) {

                content += `
                <tr class=${val?.active}>
                    <td>
                        <div class="d-flex">
                            <div class="${val?.br} line"></div><span class="text-gray">${(val.id != '' && val.id != null) ? val.id : '---'}</span>
                        </div>
                    </td>
                    <td>
                        <div class="player d-flex align-items-start">
                            ${selectTrophy (val.player_details)}
                        </div>
                    </td>
                    <td>${(val.ts != '' && val.ts != null) ? val.ts : '---'}</td>
                    <td>${(val.jtpoint != '' && val.jtpoint != null) ? val.jtpoint : '---'}</td>
                    <td>${(val.worth != '' && val.worth != null) ? val.worth : '---'}</td>
                </tr>
                `;
            })

            $("#pointTableData").html(content);


        }).fail(function(res){
            console.log(res);
        })
    }


    function selectTrophy (profile) {

       let profileContent = `
        <div class="trophy">
            ${(profile[0]?.trophy != '' && profile[0].trophy != null) ?       `
                <img src="./public/images/trophy/${profile[0].trophy}" class="img-fluid trophy" alt="trophy">`: ""
            }
        </div> 

        <div class="pic ms-4">
            ${(profile[0]?.profile != '' && profile[0].profile != null) ?       `
                <img src="./public/images/profile/${profile[0].profile}" class="img-fluid pic" alt="pic">`: ""
            }
        </div>
        <span class="text-gray ms-3">${(profile[0].name != '' && profile[0].name != null) ? profile[0].name :"---"}</span>
       `
        return profileContent;
    }
})