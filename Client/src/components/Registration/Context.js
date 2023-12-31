
export const INIT_STATE = {
    value: '',
    errorVisibility: false,
    errorMessage: '',
  };
  
  export const INPUTS = ({
    
    Customer_No='',
    N_Default_L3m='',
    Branch_Code='',
    Max_Utilization='',
    Max_Perc_Def_Chg_Pending='',
    N_Family_Member='',
    Max_Ratio_OC_Pending_POS='',
    N_PosBkt_L3m='',
    CoAp_Income='',
    Ever_Default_L12M='',
    Perc_Paymode_Online='',
    Perc_Repay_Fail='',
    Birth_Year='',
    Max_DPD_L3m='',
    Perc_Paymode_Cheq_Fail='',
    Age='',
    Total_Field_Trails='',
    Total_Resolved='',
    N_Enq_L9m='',
    Max_Loan_Balance_Others='',
    N_WorkEx_Yr='',
  }) => ({
   
    Customer_No:{
      ...INIT_STATE,
      value: Customer_No,
      placeHolder: 'Customer No',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-9]/,
      key: 'Customer_No',
      show: 'both',
      maxLength: 20,
      minLength: 1,
    },
    N_Default_L3m:{
      ...INIT_STATE,
      value: N_Default_L3m,
      placeHolder: 'Times defaulted last 3 month',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'N_Default_L3m',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
    Branch_Code:{
      ...INIT_STATE,
      value: Branch_Code,
      placeHolder: 'Branch Code',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'Branch_Code',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
    Max_Utilization:{
      ...INIT_STATE,
      value: Max_Utilization,
      placeHolder: 'Max utilization',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'Max_Utilization',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
    Max_Perc_Def_Chg_Pending:{
      ...INIT_STATE,
      value: Max_Perc_Def_Chg_Pending,
      placeHolder: 'Max percentage of default charges pending',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'Max_Perc_Def_Chg_Pending',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
    N_Family_Member:{
      ...INIT_STATE,
      value: N_Family_Member,
      placeHolder: 'Number of members in family',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'N_Family_Member',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
    Max_Ratio_OC_Pending_POS:{
      ...INIT_STATE,
      value: Max_Ratio_OC_Pending_POS,
      placeHolder: 'Ratio - OC Pending',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'Max_Ratio_OC_Pending_POS',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
    N_PosBkt_L3m:{
      ...INIT_STATE,
      value: N_PosBkt_L3m,
      placeHolder: 'Consecutively defaulted in last 3 months',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'N_PosBkt_L3m',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
    CoAp_Income:{
      ...INIT_STATE,
      value: CoAp_Income,
      placeHolder: 'Income of co-applicant',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'CoAp_Income',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
    Ever_Default_L12M:{
      ...INIT_STATE,
      value: Ever_Default_L12M,
      placeHolder: 'Ever defaulted in last 12 months [yes=1/no=0]',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'Ever_Default_L12M',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
    Perc_Paymode_Online:{
      ...INIT_STATE,
      value: Perc_Paymode_Online,
      placeHolder: 'Percentage of times repayment mode was online',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'Perc_Paymode_Online',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
    Perc_Repay_Fail:{
      ...INIT_STATE,
      value: Perc_Repay_Fail,
      placeHolder: 'Percentage of times repayment failure',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'Perc_Repay_Fail',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
    Birth_Year:{
      ...INIT_STATE,
      value: Birth_Year,
      placeHolder: 'Birth year of customer',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'Birth_Year',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
    Max_DPD_L3m:{
      ...INIT_STATE,
      value: Max_DPD_L3m,
      placeHolder: 'Max days delay in repayment in last 3 months',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'Max_DPD_L3m',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
    Perc_Paymode_Cheq_Fail:{
      ...INIT_STATE,
      value: Perc_Paymode_Cheq_Fail,
      placeHolder: 'Percentage ‘cheque’ failed',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'Perc_Paymode_Cheq_Fail',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
    Age:{
      ...INIT_STATE,
      value: Age,
      placeHolder: 'Age of customer',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'Age',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
    Total_Field_Trails:{
      ...INIT_STATE,
      value: Total_Field_Trails,
      placeHolder: 'Total Field visit',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'Total_Field_Trails',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
    Total_Resolved:{
      ...INIT_STATE,
      value: Total_Resolved,
      placeHolder: "Resolved by Calling/Field",
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'Total_Resolved',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
    N_Enq_L9m:{
      ...INIT_STATE,
      value: N_Enq_L9m,
      placeHolder: 'Enquiry for new loans',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'N_Enq_L9m',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
    Max_Loan_Balance_Others:{
      ...INIT_STATE,
      value: Max_Loan_Balance_Others,
      placeHolder: 'loan balance taken other than Canara',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'Max_Loan_Balance_Others',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
    N_WorkEx_Yr:{
      ...INIT_STATE,
      value: N_WorkEx_Yr,
      placeHolder: 'Number of years of work experience',
      readOnly: false,
      type: 'text',
      inputMode: 'text',
      regex: /[0-3]/,
      key: 'N_WorkEx_Yr',
      show: 'both',
      maxLength: 1,
      minLength: 1,
    },
  });