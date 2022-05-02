import os
import time
import csv

from subprocess import Popen, PIPE

count = 0



for filename in os.listdir("data2"):
    # print(filename)
   with open(os.path.join("data2", filename), 'r') as f:
        csvreader = csv.reader(f)
        header = []
        header = next(csvreader)
        st = "farmchaind tx farmchain create-location-data "
        for row in csvreader:
            st = "farmchaind tx farmchain create-location-data "
            st += row[0]
            st += " "
            st += row[1][1:3]
            st += row[1][4:5]
            st += " "
            st += row[3]
            st += " "
            st += row[4]
            st += " "
            st += row[5]
            st += " "
            st += row[6]
            st += " "
            st += row[2]
            st += " --from alice"
            if(count < 4):
                print(st)
                count += 1
            # os.system(st)
            print(st)
            
        # print("--\n")


        



