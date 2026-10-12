const employeeId = 'EMP101';
const travelType = 'Local';
const distanceTravelled = 100;
const claimedAmount = 1200;
const supportingDocuments = true;
let eligibleAmount;
let claimStatus;
let remarks;
let reimbursementRate;
if (distanceTravelled <= 0 || claimedAmount <= 0) {
    eligibleAmount = 0;
    claimStatus = 'Rejected';
    remarks = 'Invalid distance or claimed amount';
} else if (supportingDocuments === false) {
    eligibleAmount = 0;
    claimStatus = 'Rejected';
    remarks = 'Supporting documents not submitted';
} else {
    if (travelType === 'Local') {
        reimbursementRate = 8;
    } else if (travelType === 'Outstation') {
        reimbursementRate = 12;
    } else {
        reimbursementRate = 0;
    }
    if (reimbursementRate === 0) {
        eligibleAmount = 0;
        claimStatus = 'Rejected';
        remarks = 'Invalid travel type';
    } else {
        eligibleAmount = distanceTravelled * reimbursementRate;
        if (eligibleAmount > 10000) {
            eligibleAmount = 10000;
        }
        if (claimedAmount < eligibleAmount) {
            eligibleAmount = claimedAmount;
        }
        if (eligibleAmount === claimedAmount) {
            claimStatus = 'Approved';
            remarks = 'Claim approved for reimbursement';
        } else if (eligibleAmount > 0) {
            claimStatus = 'Partially Approved';
            remarks = 'Claim partially approved as per reimbursement policy';
        } else {
            claimStatus = 'Rejected';
            remarks = 'No eligible reimbursement amount';
        }
    }
}
console.log("------ Employee Travel Expense Report ------");
console.log("Employee ID: ", employeeId);
console.log("Travel Type: ", travelType);
console.log("Distance Travelled: ", distanceTravelled, "km");
console.log("Claimed Amount: Rs.", claimedAmount);
console.log("Eligible Amount: Rs.", eligibleAmount);
console.log("Claim Status: ", claimStatus);
console.log("Remarks: ", remarks);