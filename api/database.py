import sqlalchemy as sql
    
class Database():
    def __init__(self) -> None:
        self.engine = sql.create_engine("sqlite:///gadai.sqlite")
        self.conn = self.engine.connect()
        self.metadata = sql.MetaData()
        self.paramsNull = "[2003] = 0 and [2004] = 0 and [2005] = 0 and [2006] = 0 and [2007] = 0 and [2008] = 0 and [2009] = 0 and [2010] = 0 and [2011] = 0 and [2012] = 0 and [2013] = 0 and [2014] = 0 and [2015] = 0 and [2016] = 0 and [2017] = 0 and [2018] = 0 and [2019] = 0 and [2020] = 0 and [2021] = 0 and [2022] = 0"
        
    def selectDistinct(self, column:str):
        query = sql.text(f"select distinct {column} from kendaraan")
        with self.conn.execute(query) as rows:
            return [list(row) for row in rows]
            
    def select(self, column:str = "*"):
        query = sql.text(f"select distinct {column} from kendaraan")
        with self.conn.execute(query) as rows:
            return [list(row) for row in rows]
            
    def delete(self):
        query = sql.text(f"delete from kendaraan where {self.paramsNull}")
        self.conn.execute(query)
        self.conn.commit()
        return True
        
    def insert(self, merk, tipe, model, cc, jenis, bbm, transmisi, desc, code, th23, th22, th21, th20, th19, th18, th17, th16, th15, th14, th13, th12, th11, th10,th9, th8, th7, th6, th5, th4, th3):
        kendaraanTable = sql.Table('kendaraan', self.metadata, autoload_with=self.engine)
        query = kendaraanTable.insert().values({'merk': merk, 'type': tipe, 'model': model, 'cc': cc, 'jenis': jenis, 'bbm': bbm,
                                            'transmisi': transmisi, 'desc': desc, 'code': code, '2023': int(th23), '2022': int(th22), '2021': int(th21),
                                            '2020': int(th20), '2019': int(th19), '2018': int(th18), '2017': int(th17), '2016': int(th16), '2015': int(th15), '2014': int(th14), '2013': int(th13), '2012': int(th12), '2011': int(th11), '2010': int(th10), '2009': int(th9), '2008': int(th8), '2007': int(th7), '2006': int(th6), '2005': int(th5), '2004': int(th4), '2003': int(th3)})
        self.conn.execute(query)
        self.conn.commit()
        return True
        
    def selectWhere(self, column:str="*", where:str = ""):
        query = sql.text(f"select distinct {column} from kendaraan {where}")
        with self.conn.execute(query) as rows:
            return [list(row) for row in rows]