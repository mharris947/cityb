import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      fullName: 'Donna Mary',
      email: 'd*@gmail.com',
      dateCreated: '9/2/2025', // m/d/y
      username: 'sample1',
      password: 'sample1'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 100000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'August 30, 2025',
        description: 'Transfer from Ava Schmidt - XXXXXX1029',
        status: 'Success',
        amount_usd: 130000.0
      },
      {
        dateTime: 'August 12, 2025',
        description: 'Transfer from Olivia Mitchelle - XXXXXX3664',
        status: 'Success',
        amount_usd: 25000.0
      },
      {
        dateTime: 'June 20, 2025',
        description: 'Transfer from Mason Lee - XXXXXX7890',
        status: 'Success',
        amount_usd: 17600.0
      },
      {
        dateTime: 'June 5, 2025',
        description: 'Transfer fee - XXXXXX1373',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 5, 2025',
        description: 'Transfer to Ava Reynolds - XXXXXX3871',
        status: 'Success',
        amount_usd: 10500.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer fee - XXXXXX5612',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'February 11, 2025',
        description: 'Transfer to Liam Carter - XXXXXX5612',
        status: 'Success',
        amount_usd: -48000.0
      },
      {
        dateTime: 'December 2, 2024',
        description: 'Transfer from Mia Brooks - XXXXXX6111',
        status: 'Success',
        amount_usd: 10200.0
      },
      {
        dateTime: 'September 15, 2024',
        description: 'Transfer from Jacob Smith - XXXXXX9120',
        status: 'Success',
        amount_usd: 19400.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Transfer fee - XXXXXX2120',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 18, 2024',
        description: 'Transfer to Ava Wilson - XXXXXX2120',
        status: 'Success',
        amount_usd: -37000.0
      },
      {
        dateTime: 'November 30, 2023',
        description: 'VAT Fee - XXXXXX3345',
        status: 'Success',
        amount_usd: -62.5
      },
      {
        dateTime: 'September 12, 2023',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 129000.0
      },
      {
        dateTime: 'July 4, 2023',
        description: 'Transfer fee - XXXXXX1080',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 4, 2023',
        description: 'Transfer to Emma Johnson - XXXXXX1080',
        status: 'Success',
        amount_usd: -39000.0
      },
      {
        dateTime: 'December 7, 2022',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 21800.0
      },
      {
        dateTime: 'September 20, 2022',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 24800.0
      },
      {
        dateTime: 'June 22, 2022',
        description: 'Transfer fee - XXXXXX8647',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 22, 2022',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -3200.0
      },
      {
        dateTime: 'December 18, 2021',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 31900.0
      },
      {
        dateTime: 'September 9, 2021',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 11600.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer fee - XXXXXX9072',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'July 1, 2021',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -14700.0
      },
      {
        dateTime: 'November 23, 2020',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 34000.0
      },
      {
        dateTime: 'September 4, 2020',
        description: 'Transfer from Nathan Gray - XXXXXX1746',
        status: 'Success',
        amount_usd: 42100.0
      },
      {
        dateTime: 'June 6, 2020',
        description: 'Transfer fee - XXXXXX2019',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'June 6, 2020',
        description: 'Transfer to Olivia Smith - XXXXXX2019',
        status: 'Success',
        amount_usd: -26000.0
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      fullName: 'Ballesteros Kayla',
      email: 'b*@gmail.com',
      dateCreated: '9/18/2025', // m/d/y
      username: 'BallesterosK3731',
      password: 'BallyKayla@3429'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      isChecking: true,
      balance_usd: 182000000.0,
      isSavings: false,
      saving_balance_usd: 0.0,
      isDebitCard: true,
      debitCardNumber: "**** **** **** 7890"
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'January 13, 2026',
        description: 'Deposit - XXXXXX4573',
        status: 'Success',
        amount_usd: 182000000.0
      },
      {
        dateTime: 'January 12, 2026',
        description: 'Clearance fee - XXXXXX6653',
        status: 'Success',
        amount_usd: 7600.0
      }
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      fullName: 'Schafer Carina Susan',
      email: 's*@gmail.com',
      dateCreated: '10/4/2025', // m/d/y
      username: "JorgSteinhaus456",
      password: "Steinhaus1254",
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      isChecking: true,
      balance_usd: 500000000.0,
      isSavings: false,
      saving_balance_usd: 0.0,
      currency: 'euro'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23782',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'October 6, 2025, 3:00:02pm',
        description: 'Transfer Payment from Eric~Edward Oilfield Company - XXXXXX7852',
        status: 'Success',
        amount_usd: 500000000.0
      },
      {
        dateTime: 'March 10, 2025, 5:15:02 pm',
        description: 'Credit Card Payment officials - XXXXXX4213',
        status: 'Success',
        amount_usd: -5750.0
      },
      {
        dateTime: 'December 5, 2024, 8:30:08 am',
        description: 'Transfer from Tee~Energy Services - XXXXXX9146',
        status: 'Success',
        amount_usd: 900.0
      },
      {
        dateTime: 'October 19, 2024, 1:03:05 pm',
        description: 'Credit Card Payment - XXXXXX6723',
        status: 'Success',
        amount_usd: -1500.0
      },
      {
        dateTime: 'September 13, 2024, 2:10:06 pm',
        description: 'Check Deposit - XXXXXX8361',
        status: 'Success',
        amount_usd: -3500.0
      },
      {
        dateTime: 'June 24, 2024, 9:00:13 am',
        description: 'Transfer Payment from Steven Porter - XXXXXX2567',
        status: 'Success',
        amount_usd: 650.0
      },
      {
        dateTime: 'February 3, 2024, 4:22:05 pm',
        description: 'Credit Card Payment - XXXXXX5398',
        status: 'Success',
        amount_usd: -2000.0
      },
      {
        dateTime: 'January 8, 2023, 10:11:22 am',
        description: 'Transfer from Chad Estate Management - XXXXXX8201',
        status: 'Success',
        amount_usd: 5000.0
      },
      {
        dateTime: 'May 20, 2022, 2:00 pm',
        description: 'Credit Card Payment - XXXXXX3472',
        status: 'Success',
        amount_usd: -559.0
      },
      {
        dateTime: 'March 23, 2021, 8:50 am',
        description: 'Check Deposit XXXXXX8324 - XXXXXX6845',
        status: 'Success',
        amount_usd: 13500.0
      }
    ]
  }
];
