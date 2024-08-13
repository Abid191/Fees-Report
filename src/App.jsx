
import { Document, Page, PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer'
import './App.css'

const styles = StyleSheet.create({
  page: {
    justifyContent: 'flex-start',
    padding: 30,
    position: 'relative',
  },
  Header: {
    textAlign: 'center',
  },
  HeaderTextOne: {
    fontSize: 15
  },
  HeaderTextTwo: {
    fontSize: 9,
    marginTop: 5
  },
  SubHeader: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5
  },
  Date: {
    textAlign: 'center',
    fontSize: 8,
    marginTop: 3,
  },
  divider: {
    marginTop: 3,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderBottomStyle: 'solid',
  },
  table: {
    marginTop: 10,
    display: 'table',
    width: 'auto',
    marginBottom:10
  },

  tableRow: {
    flexDirection: 'row',
    width: 'auto',
    // paddingHorizontal: 5
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 'auto',
    backgroundColor: '#cedded',
    padding: 7,
  },
  tableColOne: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    backgroundColor: '#cedded',
    height: 'auto',
    padding: 7,
  },
  tableColTwo: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 'auto',
    padding: 7,
  },
  tableColThree: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    height: 'auto',
    padding: 7,
  },
  tableColFour: {
    width: '99%',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 'auto',
    padding: 7,
    backgroundColor:'#cedded',
    marginTop:10
  },
  tableColFive: {
    width: '12.3%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    height: 'auto',
    backgroundColor:'#cedded',
    padding: 7,
    marginTop:10
  },
  tableText: {
    fontSize: 9,
    textAlign: 'center',
    width: 'auto',
  },
  tableTextOne: {
    fontSize: 8,
    fontWeight:'bold',
    textAlign: 'right',
    width: 'auto',
  },
  tableTextTwo: {
    fontSize: 8,
    textAlign: 'center',
    width: 'auto',
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    display: 'block',
    bottom: 20,
    borderTop: ' 1px dashed black',
    width: '100%',
    fontSize: 10,
    justifyContent: 'space-between',
    // marginTop: 20,
    marginLeft: 30,
  },
  footerText: {
    fontSize: 8,
    marginTop: 5,
    marginLeft: 0
  },
  pageNumber: {
    fontSize: 8,
    marginTop: 5,
  },
  printDateTime: {
    fontSize: 8,
    marginTop: 5,
  },
})

const MyApp = () => {
  return (
    <PDFViewer width={1200} height={760}>
      <MyDocument></MyDocument>
    </PDFViewer>
  )
}
const MyDocument = () => {
  return (
    <Document title='Fees Report'>
      <Page size="A4" orientation='landscape' style={styles.page}>
        <View>
          {/* Header */}
          <View style={styles.Header}>
            <Text style={styles.HeaderTextOne}>Walton Digi-Tech Industries Ltd.</Text>
            <Text style={styles.HeaderTextTwo}>Corporate Office</Text>
            <Text style={styles.HeaderTextTwo}>Product : Computer</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.SubHeader}>
            <Text>Fees Report</Text>
          </View>
          {/* Date */}

          <View style={styles.Date}>
            <Text>( From 01-Aug-2024 To 31-Aug-2024 )</Text>
          </View>


          {/* Header Table */}

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableText}> Transaction Id </Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.tableText}> Name </Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.tableText}> Class </Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.tableText}> Fees Type </Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.tableText}> Payment Method </Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.tableText}> Paid </Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.tableText}> Discount </Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.tableText}> Fine </Text>
              </View>
              <View style={styles.tableColOne}>
                <Text style={styles.tableText}> Total </Text>
              </View>
            </View>

            {/* Table Data */}

            {Array.from({ length: 40 }).map((_, i) => (
              <View key={i} wrap={false} pageBreak="avoid" style={styles.tableRow}>
                <View style={styles.tableColTwo}>
                  <Text style={styles.tableText}> 015416 </Text>
                </View>
                <View style={styles.tableColThree}>
                  <Text style={styles.tableText}> 12/08/24 </Text>
                </View>
                <View style={styles.tableColThree}>
                  <Text style={styles.tableText}> Abid Hasan </Text>
                </View>
                <View style={styles.tableColThree}>
                  <Text style={styles.tableText}> Semester </Text>
                </View>
                <View style={styles.tableColThree}>
                  <Text style={styles.tableText}> Bkash </Text>
                </View>
                <View style={styles.tableColThree}>
                  <Text style={styles.tableText}> Yes </Text>
                </View>
                <View style={styles.tableColThree}>
                  <Text style={styles.tableText}> 10% </Text>
                </View>
                <View style={styles.tableColThree}>
                  <Text style={styles.tableText}> 00 </Text>
                </View>
                <View style={styles.tableColThree}>
                  <Text style={styles.tableText}> 60000 </Text>
                </View>
              </View>
            ))}

            <View  wrap={false} pageBreak="avoid" style={styles.tableRow}>
              <View style={styles.tableColFour}>
                <Text style={styles.tableTextOne}>Grand Total</Text>
              </View>
              <View style={styles.tableColFive}>
                <Text wrap={true} style={styles.tableTextTwo}>600000000000000000</Text>
              </View>
            </View>

          </View>
        </View>
        <Footer></Footer>
      </Page>
    </Document>
  )
}

const Footer = () => (
  <View style={styles.footer} fixed >
    <Text style={styles.footerText}>Design and developed by: Walton Group</Text>
    <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => ` ${pageNumber} / ${totalPages}`} />
    <Text style={styles.printDateTime}>Print Date and Time: Monday, 8 July 2024 11: 57: 44 AM</Text>
  </View>
)

export default MyApp