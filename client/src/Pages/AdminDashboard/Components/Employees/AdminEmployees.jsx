import { text } from "@fortawesome/fontawesome-svg-core"
import { AdminPopUpContents } from "../../../../Component/AdminPopUpContents"
import { EmployeeImg } from "../../../../Component/EmployeeImg"

export function AdminEmployees({
    allEmployees
}){

    return allEmployees?.map((employee, index) => {
        const employeeName = employee?.name
        const employeeImg = EmployeeImg(employeeName)
        const employeeRole = employee?.position 
        const employeeInfo = employee?.intro 

        return(
            <AdminPopUpContents 
                key={index}
                instanceImg={employeeImg}
                instanceName={employeeName}
                instanceText={[
                    {
                        title: "Role",
                        text: employeeRole
                    },

                    {
                        title: "Info",
                        text: employeeInfo
                    }
                ]}
            />
        )
    })
}