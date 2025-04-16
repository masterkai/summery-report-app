import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummeryService {
  getCompanies() {
    return Promise.resolve(new Set(this.getData().map(s=> s.company)));
  }
  getData() {
    return [
      {
        company: 'XYZ',
        quarter: '2025Q1',
        original: 'xyz.txt',
        summery: 'xyz-2025Q1.txt',
      },
      {
        company: 'XYZ',
        quarter: '2025Q2',
        original: 'xyz02.txt',
        summery: 'xyz-2025Q2.txt',
      },
      {
        company: 'ABC',
        quarter: '2025Q2',
        original: 'abc.txt',
        summery: 'abc-2025Q2.txt',
      },
      {
        company: 'DEF',
        quarter: '2025Q3',
        original: 'def.txt',
        summery: 'def-2025Q3.txt',
      },
      {
        company: 'GHI',
        quarter: '2025Q4',
        original: 'ghi.txt',
        summery: 'ghi-2025Q4.txt',
      },
      // Add 100 more records
      {
        company: 'JKL',
        quarter: '2025Q5',
        original: 'jkl.txt',
        summery: 'jkl-2025Q5.txt',
      },
      {
        company: 'MNO',
        quarter: '2025Q6',
        original: 'mno.txt',
        summery: 'mno-2025Q6.txt',
      },
      {
        company: 'PQR',
        quarter: '2025Q7',
        original: 'pqr.txt',
        summery: 'pqr-2025Q7.txt',
      },
      {
        company: 'STU',
        quarter: '2025Q8',
        original: 'stu.txt',
        summery: 'stu-2025Q8.txt',
      },
      {
        company: 'VWX',
        quarter: '2025Q9',
        original: 'vwx.txt',
        summery: 'vwx-2025Q9.txt',
      },
      {
        company: 'YZA',
        quarter: '2025Q10',
        original: 'yza.txt',
        summery: 'yza-2025Q10.txt',
      },
      {
        company: 'BCD',
        quarter: '2025Q11',
        original: 'bcd.txt',
        summery: 'bcd-2025Q11.txt',
      },
      {
        company: 'EFG',
        quarter: '2025Q12',
        original: 'efg.txt',
        summery: 'efg-2025Q12.txt',
      },
      {
        company: 'HIJ',
        quarter: '2025Q13',
        original: 'hij.txt',
        summery: 'hij-2025Q13.txt',
      },
      {
        company: 'KLM',
        quarter: '2025Q14',
        original: 'klm.txt',
        summery: 'klm-2025Q14.txt',
      },
      {
        company: 'NOP',
        quarter: '2025Q15',
        original: 'nop.txt',
        summery: 'nop-2025Q15.txt',
      },
      {
        company: 'QRS',
        quarter: '2025Q16',
        original: 'qrs.txt',
        summery: 'qrs-2025Q16.txt',
      },
      {
        company: 'TUV',
        quarter: '2025Q17',
        original: 'tuv.txt',
        summery: 'tuv-2025Q17.txt',
      },
      {
        company: 'WXY',
        quarter: '2025Q18',
        original: 'wxy.txt',
        summery: 'wxy-2025Q18.txt',
      },
      {
        company: 'ZAB',
        quarter: '2025Q19',
        original: 'zab.txt',
        summery: 'zab-2025Q19.txt',
      },
      {
        company: 'CDE',
        quarter: '2025Q20',
        original: 'cde.txt',
        summery: 'cde-2025Q20.txt',
      },
      {
        company: 'FGH',
        quarter: '2025Q21',
        original: 'fgh.txt',
        summery: 'fgh-2025Q21.txt',
      },
      {
        company: 'IJK',
        quarter: '2025Q22',
        original: 'ijk.txt',
        summery: 'ijk-2025Q22.txt',
      },
      {
        company: 'LMN',
        quarter: '2025Q23',
        original: 'lmn.txt',
        summery: 'lmn-2025Q23.txt',
      },
      {
        company: 'OPQ',
        quarter: '2025Q24',
        original: 'opq.txt',
        summery: 'opq-2025Q24.txt',
      },
      {
        company: 'RST',
        quarter: '2025Q25',
        original: 'rst.txt',
        summery: 'rst-2025Q25.txt',
      },
      {
        company: 'UVW',
        quarter: '2025Q26',
        original: 'uvw.txt',
        summery: 'uvw-2025Q26.txt',
      },
      {
        company: 'XYZ',
        quarter: '2025Q27',
        original: 'xyz.txt',
        summery: 'xyz-2025Q27.txt',
      },
      {
        company: 'ABC',
        quarter: '2025Q28',
        original: 'abc.txt',
        summery: 'abc-2025Q28.txt',
      },
      {
        company: 'DEF',
        quarter: '2025Q29',
        original: 'def.txt',
        summery: 'def-2025Q29.txt',
      },
      {
        company: 'GHI',
        quarter: '2025Q30',
        original: 'ghi.txt',
        summery: 'ghi-2025Q30.txt',
      },
      {
        company: 'JKL',
        quarter: '2025Q31',
        original: 'jkl.txt',
        summery: 'jkl-2025Q31.txt',
      },
      {
        company: 'MNO',
        quarter: '2025Q32',
        original: 'mno.txt',
        summery: 'mno-2025Q32.txt',
      },
      {
        company: 'PQR',
        quarter: '2025Q33',
        original: 'pqr.txt',
        summery: 'pqr-2025Q33.txt',
      },
      {
        company: 'STU',
        quarter: '2025Q34',
        original: 'stu.txt',
        summery: 'stu-2025Q34.txt',
      },
      {
        company: 'VWX',
        quarter: '2025Q35',
        original: 'vwx.txt',
        summery: 'vwx-2025Q35.txt',
      },
      {
        company: 'YZA',
        quarter: '2025Q36',
        original: 'yza.txt',
        summery: 'yza-2025Q36.txt',
      },
      {
        company: 'BCD',
        quarter: '2025Q37',
        original: 'bcd.txt',
        summery: 'bcd-2025Q37.txt',
      },
      {
        company: 'EFG',
        quarter: '2025Q38',
        original: 'efg.txt',
        summery: 'efg-2025Q38.txt',
      },
      {
        company: 'HIJ',
        quarter: '2025Q39',
        original: 'hij.txt',
        summery: 'hij-2025Q39.txt',
      },
      {
        company: 'KLM',
        quarter: '2025Q40',
        original: 'klm.txt',
        summery: 'klm-2025Q40.txt'
      }

    ];
  }
  getAll() {
    return Promise.resolve(this.getData());
  }
}
